from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .multichain import MultiChainClient
from rest_framework import serializers
from .serializers import ItemSerializer, StockManagementSerializer

rpchost='127.0.0.1'
rpcport=6740
rpcuser='multichainrpc'
rpcpassword='HLf7ccpyruvHzZbxDw4SSgubQYSC6SbLkNjZLZeFYCRz'

mc=MultiChainClient(rpchost, rpcport, rpcuser, rpcpassword)

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': 'api/get-stats/',
            'method': 'GET',
            'body': None,
            'description': 'Returns the stats about the inventory'
        },
        {
            'Endpoint': 'api/items/',
            'method': 'GET',
            'body': None,
            'description': 'Returns all the items in the inventory'
        },
        {
            'Endpoint': 'api/get-low-stock',
            'method': 'GET',
            'body': None,
            'description': 'Returns all items which are below the low stock threshold'
        },
        {
            'Endpoint': 'api/get-out-of-stock',
            'method': 'GET',
            'body': None,
            'description': 'Returns all items which are out of stock.'
        },
        {
            'Endpoint': 'api/get-categories',
            'method': 'GET',
            'body': None,
            'description': 'Returns all the categories of the inventory.'
        },
        {
            'Endpoint': 'api/add-item/',
            'method': 'POST',
            'body': {},
            'description': 'Adds a new item to the inventory'
        },
        {
            'Endpoint': 'api/add-stock/',
            'method': 'POST',
            'body': {},
            'description': 'Returns all notes'
        },
        {
            'Endpoint': 'api/deduct-stock',
            'method': 'POST',
            'body': {},
            'description': 'Returns all notes'
        },
        {
            'Endpoint': 'api/get-users',
            'method': 'GET',
            'body': {},
            'description': 'Returns all nodes registered in the blockchain'
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getLatestBlock(request):
    print(mc)
    res =  mc.liststreamitems('stream1') 
    print(res)
    if mc.success():
        return Response(res[-1])
    else: 
        print('Error code: '+str(mc.errorcode())+'\n')
        print('Error message: '+mc.errormessage()+'\n')
        return Response(str(mc.errorcode())+' : '+mc.errormessage())

@api_view(['GET'])
def getStats(request):
    data = getItemList()
    items = len(data)
    total_value = sum([item["quantity"]*item["cost"] for item in data])
    out_of_stock = sum(1 for item in data if item["quantity"] == 0)
    low_stock = sum(1 for item in data if item["quantity"] <= 60)
    category_count = len(set(item["group"] for item in data)) 
    response_data = {
        "item_count" : items,
        "total_value" : total_value,
        "out_of_stock" : out_of_stock,
        "low_stock" : low_stock,
        "category_count":category_count
    }
    return Response(response_data)
    if mc.success():
        return Response(response_data)
    else: 
        print('Error code: '+str(mc.errorcode())+'\n')
        print('Error message: '+mc.errormessage()+'\n')
        return Response(str(mc.errorcode())+' : '+mc.errormessage())

@api_view(['GET'])
def getItems(request):
    data = getItemList()
    return Response(data)

@api_view(['GET'])
def getLowStock(request):
    data = getItemList()
    low_stock = [item for item in data if item["quantity"] <= 60 ]
    return Response({"items" : low_stock})

@api_view(['GET'])
def getOutOfStock(request):
    data = getItemList()
    out_of_stock = [item for item in data if item["quantity"] == 0 ]
    return Response({"items" : out_of_stock})

@api_view(['GET'])
def getCategories(request):
    data = getItemList()
    return Response(list(set(item["group"] for item in data)))

@api_view(["POST"])
def addNewItem(request):
    serializer = ItemSerializer(data=request.data)
    if(serializer.is_valid()):
        data = serializer.validated_data
        mc.publish('products', data["product_id"], {"json" : {"item_name" : data["item_name"],"quantity" : data["quantity"],"unit" : data["unit"],"group" : data["group"],"cost" : data["cost"]}})
        return Response(serializer.validated_data, status=201)
    return Response(serializer.errors , status = 400)


@api_view(["POST"])
def addStock(request):
    serializer = StockManagementSerializer(data = request.data)
    if(serializer.is_valid()):
        data = serializer.validated_data
        itemData = getItem(data["product_id"])
        mc.publish('products', data["product_id"], {"json" : {"item_name" : itemData["item_name"],"quantity" : itemData["quantity"]+data["quantity"],"unit" : itemData["unit"],"group" : itemData["group"],"cost" : itemData["cost"]}})
        return Response(serializer.validated_data , status=200)
    return Response(serializer.errors , status = 400)
    

@api_view(["POST"])
def deductStock(request):
    serializer = StockManagementSerializer(data = request.data)
    if(serializer.is_valid()):
        data = serializer.validated_data
        itemData = getItem(data["product_id"])
        if(data["quantity"] > itemData["quantity"] ):
            return Response({"message": "Insufficient stock for deduction"} , status=400)
        mc.publish('products', data["product_id"], {"json" : {"item_name" : itemData["item_name"],"quantity" : itemData["quantity"]-data["quantity"],"unit" : itemData["unit"],"group" : itemData["group"],"cost" : itemData["cost"]}})
        return Response(serializer.validated_data , status=200)
    return Response(serializer.errors , status = 400)


@api_view(["GET"])
def getUsers(request):
    nodes = mc.listpermissions('receive')
    users = []
    for i , item in enumerate(nodes , start = 1):
        username = f"User {i}"
        node_address = item["address"]
        isAdmin = mc.verifypermission(item["address"], 'admin')
        user = {
            "username" : username , 
            "node_address" : node_address,
            "isAdmin" : isAdmin
        }
        users.append(user)
    users_sorted = sorted(users, key=lambda x: x["isAdmin"], reverse=True)
    return Response(users_sorted)


@api_view(["GET"])
def isAdmin(request):
    data = mc.getaddresses()[0]
    isAdmin = mc.verifypermission(data, 'admin')
    return Response(isAdmin)
















# utils
def getItem(id):
    data = mc.liststreamkeyitems('products' , id )[-1]['data']['json']
    return data

def getItemList():
    keys = mc.liststreamkeys('products')
    products = []
    for key in keys:
        data =  mc.liststreamkeyitems('products' , key["key"])[-1]["data"]["json"]
        eachData = {
            "item_name": data["item_name"],
            "product_id": key["key"],
            "quantity": data["quantity"],
            "unit": data["unit"],
            "group": data["group"],
            "cost": data["cost"]
        }
        products.append(eachData)
    return products