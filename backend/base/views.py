from .products import products
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    return Response(products)


@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)