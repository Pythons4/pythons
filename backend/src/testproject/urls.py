from django.contrib import admin
from django.urls import path, include
from fEnd import views
from rest_framework import routers

router = routers.DefaultRouter()                      # add this
router.register(r'tips', views.TipsView, 'tips')


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    # path('addtip/', views.addtip),
    # path('showtips/', views.showtips),
    path('api/', include(router.urls))
]
