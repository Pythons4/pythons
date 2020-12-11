from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.http import HttpResponse
from bson.objectid import ObjectId
from rest_framework.views import APIView
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
import jwt
from django.conf import settings


from .serializers import TipsSerializer, UsersSerializer, AdminSerializer, TipCommintsSerializer, ServiceSerializer, UserServiceSerializer, FavSerializer, ProductsSerializer, UserProductsSerializer
from cloudinary.forms import cl_init_js_callbacks
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Tip, Users, Admin, Service, UserService, TipCommints, Fav, Products, UserProducts


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def testfunction(request):
    # id = request.query_params['id']
    # return Response({'messege': "hello", 'the id': int(id)*2})
    serializer_class = TipsSerializer          # add this
    queryset = Tip.objects.all()
    return Response(queryset.data)


class TipsView(viewsets.ModelViewSet):
    serializer_class = TipsSerializer

    def get_queryset(self):
        tips = Tip.objects.all()
        return tips

    def retrieve(self, request, *args, **kwargs):
        params = kwargs
        print(params)
        thetips = Tip.objects.filter(
            user_id=params['pk'])
        serializer = TipsSerializer(thetips, many=True)
        print(serializer.data)
        return Response(serializer.data)


class TipCommintsView(viewsets.ModelViewSet):
    serializer_class = TipCommintsSerializer
    queryset = TipCommints.objects.all()


class UsersView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()
    token = jwt.encode(
        {'user_name': 'qamr', '_id': '98765edfghjklmnbvrt'},
        settings.SECRET_KEY)
    print(token)


def loginuserpage(request):
    user = authenticate(request, username='qamar', password='09okj')


class AdminView(viewsets.ModelViewSet):
    serializer_class = AdminSerializer
    queryset = Admin.objects.all()


class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class UserServiceView(viewsets.ModelViewSet):
    serializer_class = UserServiceSerializer
    queryset = UserService.objects.all()


# class TipsView(viewsets.ModelViewSet):
#     serializer_class = TipsSerializer
#     queryset = Tip.objects.all()


class FavView(viewsets.ModelViewSet):
    serializer_class = FavSerializer
    queryset = Fav.objects.all()


@permission_classes([AllowAny])
class ProductsView(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer

    def get_queryset(self):
        queryset = Products.objects.all()
        return queryset

    def retrieve(self, request, *args, **kwargs):
        print(request.method)
        params = kwargs
        print(params)
        products = Products.objects.filter(
            _id=ObjectId(params['pk']))
        products.product_quantity = request.data['product_quantity']
        serializer = ProductsSerializer(products, many=True)
        print(serializer.data)
        return Response(serializer.data)


class UserProductsView(viewsets.ModelViewSet):
    serializer_class = UserProductsSerializer
    queryset = UserProducts.objects.all()


@api_view(['PUT'])
@permission_classes([AllowAny])
def updateProductQuantity(request):
    print('params')
    products = Products.objects.get(
        _id=ObjectId(request.data['_id']))
    products.product_quantity = request.data['product_quantity']
    products.save()
    serializer = ProductsSerializer(products)
    print(serializer.data)
    user = Users.objects.get(user_name='qamr')
    # payload = jwt_payload_handler(user)
    return Response(serializer.data)
