from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from fEnd import views

router = routers.DefaultRouter()
router.register(r'users', views.UsersView, 'users')
router.register(r'tips', views.TipsView, 'tips')
router.register(r'tipcomments', views.TipCommintsView, 'tipstipcomments')
router.register(r'admins', views.AdminView, 'admins')
router.register(r'favorites', views.FavView, 'favorites')
router.register(r'services', views.ServiceView, 'services')
router.register(r'userservice', views.UserServiceView, 'userservice')
router.register(r'products', views.ProductsView, 'products')
router.register(r'userproducts', views.UserProductsView, 'userproducts')
# router.register(r'usertips', views.UserTipsView, 'usertips')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
