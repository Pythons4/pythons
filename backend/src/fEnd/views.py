from django.http import HttpResponse

from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import TipsSerializer, UsersSerializer, AdminSerializer, TipCommintsSerializer, ServiceSerializer, UserServiceSerializer, FavSerializer, ProductsSerializer, UserProductsSerializer
from cloudinary.forms import cl_init_js_callbacks
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Tip, Users, Admin, Service, UserService, TipCommints, Fav, Products, UserProducts


@csrf_exempt
class TipsView(viewsets.ModelViewSet):
    serializer_class = TipsSerializer
    # queryset = Tip.objects.all()

    # def get_queryset(self):
    #     tips = Tip.objects.all()
    #     return tips

    def get(self, request, *args, **kwargs):
        print('hello')

        try:
            id = request.query_params['user_id']

            if id != None:
                usertip = Tip.objects.get(user_id=id)
                serializer = TipsSerializer(usertip)
        except:
            usertips = self.get_queryset()
            serializer = UserTipsSerializer(usertips, many=True)


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

# def showtips(request):
#     tips = Tips.objects.all()
#     tipstittle = ""
#     for tip in tips:
#         tipstittle += tip.tip_title
#     return HttpResponse(tipstittle)

# # Create your views here.
# from django.http import HttpResponse
# from fEnd.models import Tips
# from fEnd.models import Fav
# from fEnd.models import TipCommints

# from django.views.decorators.csrf import csrf_exempt


class TipsView(viewsets.ModelViewSet):       # add this
    serializer_class = TipsSerializer          # add this
    queryset = Tip.objects.all()


# # work like the controller in node.js
# # add anew tip
# def addtip(request):
#     tip = Tips(tip_title=request.POST.get('tip_title'),
#                user_id=request.POST.get('user_id'),
#                tip_img=request.POST.get('tip_img'),
#                tip_text=request.POST.get('tip_text'))
#     tip.save()
#     return HttpResponse('Inserted')
class FavView(viewsets.ModelViewSet):
    serializer_class = FavSerializer
    queryset = Fav.objects.all()


class ProductsView(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = Products.objects.all()


class UserProductsView(viewsets.ModelViewSet):
    serializer_class = UserProductsSerializer
    queryset = UserProducts.objects.all()


class ProductsUpdateView(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer(queryset)
    # return Response(serializer_class.data)

# @csrf_exempt


def ProductUpdate(request, id):
    theproduct = Products.objects.get(_id=ObjectId(id))
    theproduct.product_quantity = request.PUT.get('product_quantity')
    theproduct.save()
    return HttpResponse('updated')
