# # from django.shortcuts import render

# # Create your views here.
from django.http import HttpResponse
# from fEnd.models import Fav
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TipsSerializer, UsersSerializer, AdminSerializer, TipCommintsSerializer, ServiceSerializer, UserServiceSerializer, FavSerializer, ProductsSerializer, UserProductsSerializer
from cloudinary.forms import cl_init_js_callbacks
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Tip, Users, Admin, Service, UserService, TipCommints, Fav, Products, UserProducts



@csrf_exempt
class TipsView(viewsets.ModelViewSet):
    serializer_class = TipsSerializer
    queryset = Tip.objects.all()

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
# # from django.shortcuts import render

# @csrf_exempt
# # work like the controller in node.js
# # add anew tip


def addtip(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    # print(body)
    # tip = Tip(tip_title=request.POST.get('tip_title'),
    #           user_id=request.POST.get('user_id'),
    #           tip_img=request.POST.get('tip_img'),
    #           tip_text=request.POST.get('tip_text'))
    # tip.save()
    return HttpResponse(body)

# # git all tips in database

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

# @csrf_exempt
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

# def showtips(request):
#     tips = Tips.objects.all()
#     tipstittle = ""
#     for tip in tips:
#         tipstittle += tip.tip_title
#     return HttpResponse(tipstittle)

def index(request):
    return render(request, 'pictures/index.html')
