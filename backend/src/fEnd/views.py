# # from django.shortcuts import render

# # Create your views here.
from django.http import HttpResponse
# from fEnd.models import Fav
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TipsSerializer, UsersSerializer, AdminSerializer, TipCommintsSerializer, ServiceSerializer, UserServiceSerializer, FavSerializer, ProductsSerializer, UserProductsSerializer
from .models import Tips, Users, Admin, Service, UserService, TipCommints, Fav, Products, UserProducts


class TipsView(viewsets.ModelViewSet):
    serializer_class = TipsSerializer
    queryset = Tips.objects.all()

class TipCommintsView(viewsets.ModelViewSet):
    serializer_class = TipCommintsSerializer
    queryset = TipCommints.objects.all()

class UsersView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()


class AdminView(viewsets.ModelViewSet):
    serializer_class = AdminSerializer
    queryset = Admin.objects.all()


class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()

class UserServiceView(viewsets.ModelViewSet):
    serializer_class = UserServiceSerializer
    queryset = UserService.objects.all()

class FavView(viewsets.ModelViewSet):
    serializer_class = FavSerializer
    queryset = Fav.objects.all()

class ProductsView(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = Products.objects.all()

class UserProductsView(viewsets.ModelViewSet):
    serializer_class = UserProductsSerializer
    queryset = UserProducts.objects.all()

