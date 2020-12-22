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
import bcrypt
from django.conf import settings
from .serializers import TipsSerializer, UsersSerializer, AdminSerializer, TipCommintsSerializer, ServiceSerializer, UserServiceSerializer, ProductsSerializer, UserProductsSerializer, FavSerializer
from cloudinary.forms import cl_init_js_callbacks
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Tip, Users, Admin, Service, UserService, TipCommints,  Products, UserProducts, Fav


# tips view/requests (getall and get by user id )
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


# update the tip favarray
# @api_view(['PUT'])
# @permission_classes([AllowAny])
# def updateTipFavorite(request):
#     # print('params')
#     tip = Tip.objects.get(
#         _id=ObjectId(request.data['tip_id']))
#     tip.favorite = request.data['favorite']
#     tip.save()
#     serializer = TipsSerializer(tip)
#     # print(serializer.data)
#     return Response(serializer.data)
#     return Response(serializer.data)


class TipCommintsView(viewsets.ModelViewSet):
    serializer_class = TipCommintsSerializer

    def get_queryset(self):
        tipcommint = TipCommints.objects.all()
        return tipcommint

    def retrieve(self, request, *args, **kwargs):
        params = kwargs
        print(params)
        thetipcommint = TipCommints.objects.filter(
            tip_id=params['pk'])
        serializer = TipCommintsSerializer(thetipcommint, many=True)
        print(serializer.data)
        return Response(serializer.data)


# user view/request (getall and create user and give it authentication(token))
@permission_classes([AllowAny])
class UsersView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer

    def get_queryset(self):
        queryset = Users.objects.all()
        return queryset

    def create(self, request, *args, **kwargs):
        theuser = Users.objects.filter(user_email=request.data['user_email'])
        if(theuser):
            return Response('already existed user')
        print('theuser')
        userdata = request.data
        hashed = bcrypt.hashpw(
            userdata['user_password'].encode('utf-8'), bcrypt.gensalt())
        print(hashed)
        newuser = Users.objects.create(user_email=userdata['user_email'],
                                       user_password=hashed.decode(),
                                       user_name=userdata['user_name'],
                                       user_phon=userdata['user_phon'])
        newuser.save()
        serializer = UsersSerializer(newuser)
        token = jwt.encode(
            {'user_name': userdata['user_email'],
                '_id': serializer.data['_id']},
            settings.SECRET_KEY)
        return Response([serializer.data, token])


class AdminView(viewsets.ModelViewSet):
    serializer_class = AdminSerializer
    queryset = Admin.objects.all()


class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


class UserServiceView(viewsets.ModelViewSet):
    serializer_class = UserServiceSerializer
    queryset = UserService.objects.all()

    def get_queryset(self):
        queryset = UserService.objects.all()
        return queryset

    def retrieve(self, request, *args, **kwargs):
        params = kwargs
        print(params)
        userServices = UserService.objects.filter(
            user_id=ObjectId(params['pk']))
        serializer = UserServiceSerializer(userServices, many=True)
        print(serializer.data)
        return Response(serializer.data)


class FavView(viewsets.ModelViewSet):
    serializer_class = FavSerializer
    queryset = Fav.objects.all()

    def get_queryset(self):
        queryset = Fav.objects.all()
        return queryset

    def retrieve(self, request, *args, **kwargs):
        params = kwargs
        print(params)
        userFav = Fav.objects.filter(
            user_id=ObjectId(params['pk']))
        serializer = FavSerializer(userFav, many=True)
        print(serializer.data)
        return Response(serializer.data)


@api_view(['POST'])
@permission_classes([AllowAny])
def updateFavorite(request):
    print('params')
    favorite = Fav.objects.get(
        _id=ObjectId(request.data['_id']))
    favorite.delete()
    return Response('hi')


@api_view(['POST'])
@permission_classes([AllowAny])
def updateFavorite(request):
    print('params')
    favorite = Fav.objects.get(
        _id=ObjectId(request.data['_id']))
    favorite.delete()
    return Response('hi')


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


# update product quantity view (put request handler)
@api_view(['PUT'])
@permission_classes([AllowAny])
def updateProductQuantity(request):
    print('params')
    products = Products.objects.get(
        _id=ObjectId(request.data['product_id']))
    products.product_quantity = products.product_quantity - \
        request.data['product_user_quantity']
    products.save()
    serializer = ProductsSerializer(products)
    print(serializer.data)
    # user = Users.objects.get(user_name='qamr')
    return Response(serializer.data)


# use login handler with jwt
@api_view(['POST'])
@permission_classes([AllowAny])
def getuserinfologin(request):
    theuser = Users.objects.filter(
        user_email=request.data['user_email'])
    print(theuser)
    if(theuser):
        serializer = UsersSerializer(theuser, many=True)
        tuple_list = serializer.data[0]
        tuple_list = list(tuple_list.items())
        print(tuple_list[3][1])
        if bcrypt.checkpw(request.data['user_password'].encode('utf-8'),
                          tuple_list[3][1].encode()):
            token = jwt.encode(
                {'user_email': tuple_list[2][1],
                 '_id': tuple_list[0][1]},
                settings.SECRET_KEY)
            return Response([serializer.data, token])
        else:
            return Response('wrong password')

    else:
        return Response('wrong email')


# user update image
@ api_view(['POST'])
@ permission_classes([AllowAny])
def updateUserImage(request):
    theuser = Users.objects.get(
        _id=ObjectId(request.data['user_id']))
    if(request.data['chang_it'] == "img"):
        theuser.user_img = request.data['user_img']
    else:
        theuser.user_bio = request.data['user_bio']
        theuser.user_phon = request.data['user_phon']
        theuser.user_name = request.data['user_name']
    theuser.save()
    serializer = UsersSerializer(theuser)
    return Response(serializer.data)


# admin login handler with jwt
@ api_view(['POST'])
@ permission_classes([AllowAny])
def getAdminInfoLogin(request):
    theadmin = Admin.objects.filter(
        admin_email=request.data['admin_email'])
    if(theadmin):
        serializer = AdminSerializer(theadmin, many=True)
        tuple_list = serializer.data[0]
        tuple_list = list(tuple_list.items())
        print(tuple_list[3][1])
        if(tuple_list[3][1] != request.data['admin_password']):
            return Response('wrong password')
        else:
            token = jwt.encode(
                {'admin_email': tuple_list[2][1],
                 '_id': tuple_list[0][1]},
                settings.SECRET_KEY)
            return Response([serializer.data, token])

    else:
        return Response('wrong email')


# update user services approve by admin (put request handler)
@ api_view(['PUT'])
@ permission_classes([AllowAny])
def updateUserServicesApprove(request):
    userservice = UserService.objects.get(
        _id=ObjectId(request.data['_id']))
    userservice.user_service_approv = request.data['approve']
    userservice.save()
    serializer = UserServiceSerializer(userservice)
    return Response(serializer.data)
