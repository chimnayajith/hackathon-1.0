from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .multichain import MultiChainClient

rpchost='127.0.0.1'
rpcport=6740
rpcuser='multichainrpc'
rpcpassword='HLf7ccpyruvHzZbxDw4SSgubQYSC6SbLkNjZLZeFYCRz'


mc=MultiChainClient(rpchost, rpcport, rpcuser, rpcpassword)

# data = [
#     {
#         "item_name": "Widget A",
#         "product_id": "P001",
#         "quantity": 100,
#         "unit": ["piece"],
#         "group": "Electronics",
#         "cost": 25.99
#     },
#     {
#         "item_name": "Gizmo B",
#         "product_id": "P002",
#         "quantity": 50,
#         "unit": ["piece"],
#         "group": "Gadgets",
#         "cost": 12.49
#     },
#     {
#         "item_name": "Tool C",
#         "product_id": "P003",
#         "quantity": 30,
#         "unit": ["piece"],
#         "group": "Tools",
#         "cost": 8.75
#     },
#     {
#         "item_name": "Raw Material X",
#         "product_id": "P004",
#         "quantity": 6,
#         "unit": ["kg"],
#         "group": "Materials",
#         "cost": 2.5
#     }
# ]


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
    res =  mc.liststreamitems('stream1')
    data = res[-1]
    items = len(data)
    total_value = sum([item["quantity"]*item["cost"] for item in data])
    out_of_stock = sum(1 for item in data if item["quantity"] == 0)
    low_stock = sum(1 for item in data if item["quantity"] <= 10)
    category_count = len(set(item["group"] for item in data)) 
    response_data = {
        "item_count" : items,
        "total_value" : total_value,
        "out_of_stock" : out_of_stock,
        "low_stock" : low_stock,
        "category_count":category_count
    }
    return Response(response_data)
    # if mc.success():
    #     return Response(response_data)
    # else: 
    #     print('Error code: '+str(mc.errorcode())+'\n')
    #     print('Error message: '+mc.errormessage()+'\n')
    #     return Response(str(mc.errorcode())+' : '+mc.errormessage())