# # from django.shortcuts import render

# # Create your views here.
from django.http import HttpResponse
from .models import Tips
# from fEnd.models import Fav
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TipsSerializer
# from .models import TipCommints
from django.views.decorators.csrf import csrf_exempt


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

# # git all tips in database


# def showtips(request):
#     tips = Tips.objects.all()
#     tipstittle = ""
#     for tip in tips:
#         tipstittle += tip.tip_title
#     return HttpResponse(tipstittle)


class TipsView(viewsets.ModelViewSet):       # add this
    serializer_class = TipsSerializer          # add this
    queryset = Tips.objects.all()
