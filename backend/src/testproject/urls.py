from django.contrib import admin
from django.urls import path, include
from fEnd import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'tips', views.TipsView, 'tips')

router.register(r'users', views.UsersView, 'users')


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
    # path('addtip/', views.addtip),
    # path('showtips/', views.showtips),
]
