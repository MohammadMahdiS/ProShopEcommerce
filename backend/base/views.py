from django.shortcuts import get_object_or_404
from .products import products
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'products/',
        'products/create/',

        'products/upload/',
        'products/<id>/reviews/',

        'products/top/',
        'products/<id>/',

        'products/delete/<id>/',
        'products/update/<id>/',

    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

# Retrieve a single product by its ID
@api_view(['GET'])
def getProduct(request, pk):
    try:
        product = Product.objects.get(_id=pk)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'detail': 'Product not found'}, status=404)