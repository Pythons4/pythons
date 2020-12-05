from django.contrib import admin
from django.urls import path, include                  
from rest_framework import routers                     
from fEnd import views 

router = routers.DefaultRouter()                      
router.register(r'users', views.UsersView, 'users')  
router.register(r'tips', views.TipsView, 'tips')  


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
     path('api/', include(router.urls))
    # path('addtip/', views.addtip),
    # path('showtips/', views.showtips),
]
