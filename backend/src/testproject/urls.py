from django.contrib import admin
from django.urls import path,include
from tips import views

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('addtip/', views.addtip),
    path('showtip/', views.showtips),


]
