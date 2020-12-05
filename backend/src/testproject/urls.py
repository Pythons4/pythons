from django.contrib import admin
from django.urls import path, include
from fEnd import views

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('addtip/', views.addtip),
    path('showtips/', views.showtips),
]
