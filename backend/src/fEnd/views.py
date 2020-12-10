# # from django.shortcuts import render

# # Create your views here.
import json
from django.http import HttpResponse
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework import viewsets
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from .serializers import TipsSerializer, UsersSerializer, AdminSerializer
from .serializers import TipCommintsSerializer, ServiceSerializer
from .serializers import UserServiceSerializer, FavSerializer
from .serializers import ProductsSerializer, UserProductsSerializer

from cloudinary.forms import cl_init_js_callbacks
from django.views.decorators.csrf import csrf_exempt
from .models import Tip, Users, Admin, Service, UserService, TipCommints
from .models import Fav, Products, UserProducts, UserTips
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView


class TipsView(viewsets.ModelViewSet):
    serializer_class = TipsSerializer
    # queryset = Tip.objects.all()

    def get_queryset(self):
        tips = Tip.objects.all()
        return tips

    def get(self, request, *args, **kwargs):
        try:
            id = request.query_params['id']
            if id != None:
                usertip = Tip.objects.get(id=id)
                serializer = TipsSerializer(usertip)
        except:
            usertips = self.get_queryset()
            serializer = UserTipsSerializer(usertips, many=True)
        return Response(serializer.data)


class TipCommintsView(viewsets.ModelViewSet):
    serializer_class = TipCommintsSerializer
    queryset = TipCommints.objects.all()


# class UserTipsView(APIView):
#     serializer_class = UserTipsSerializer

    # def get_queryset(self):
    #     usertips = UserTips.objects.all()
    #     return usertips

    # def get(self, request, *args, **kwargs):
    #     try:
    #         id = request.query_params['id']
    #         if id != None:
    #             usertip = UserTips.objects.get(id=id)
    #             serializer = UserTipsSerializer(usertip)
    #     except:
    #         usertips = self.get_queryset()
    #         serializer = UserTipsSerializer(usertips, many=True)
    #     return Response(serializer.data)
    # queryset = UserTips.objects.all()

    # @api_view(['GET', 'POST', 'DELETE'])
    # def tips_list(request):
    #     if request.method == 'GET':
    #         data = UserTips.objects.all()
    #         print(data)
    #         user_id = request.GET.get('user_id', None)
    #         if user_id is not None:
    #             usertips = data.filter(user_id=user_id).values()

    #         usertips_serializer = UserTipsSerializer(usertips, many=True)
    #         return JsonResponse(usertips_serializer.data, safe=False)
    # def tutorial_list(request):
    # ...

    # elif request.method == 'POST':
    #     tutorial_data = JSONParser().parse(request)
    #     tutorial_serializer = TutorialSerializer(data=tutorial_data)
    #     if tutorial_serializer.is_valid():
    #         tutorial_serializer.save()
    # def get(request):
    #     id = request.GET.get('usre_id', '')
    #     # print(id)
    # queryset = UserTips.objects.all().filter(user_id=id).values()
    # print(id)
    # @api_view(['GET', 'POST'])
    # def students_list(request):
    #     if request.method == 'GET':
    #         data = Student.objects.all()
    #         return Response(serializer.data)
    #     elif request.method == 'POST':
    #         serializer = StudentSerializer(data=request.data)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response(status=status.HTTP_201_CREATED)


class UsersView(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()


class AdminView(viewsets.ModelViewSet):
    serializer_class = AdminSerializer
    queryset = Admin.objects.all()


class ServiceView(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()


# # git all tips in database

class UserServiceView(viewsets.ModelViewSet):
    serializer_class = UserServiceSerializer
    queryset = UserService.objects.all()


class TipsView(viewsets.ModelViewSet):       # add this
    serializer_class = TipsSerializer          # add this
    queryset = Tip.objects.all()


class FavView(viewsets.ModelViewSet):
    serializer_class = FavSerializer
    queryset = Fav.objects.all()


class ProductsView(viewsets.ModelViewSet):
    serializer_class = ProductsSerializer
    queryset = Products.objects.all()


class UserProductsView(viewsets.ModelViewSet):
    serializer_class = UserProductsSerializer
    queryset = UserProducts.objects.all()
