from rest_framework import serializers

class ItemSerializer(serializers.Serializer):
    product_id = serializers.CharField(max_length=100)
    item_name = serializers.CharField(max_length=55)
    quantity = serializers.IntegerField()
    unit = serializers.CharField(max_length=100)
    group = serializers.CharField(max_length=255)
    cost = serializers.FloatField()

class StockManagementSerializer(serializers.Serializer):
    product_id = serializers.CharField(max_length=100)
    quantity = serializers.IntegerField()