# from django.shortcuts import render

# Create your views here.
import HttpResponse from django.http


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

