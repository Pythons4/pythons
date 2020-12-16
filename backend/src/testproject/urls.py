from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from fEnd import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

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


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/updateproduct', views.updateProductQuantity),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/usercheck', views.getuserinfologin),
    path('api/userimgupdate', views.updateUserImage),
    path('api/adminLogin', views.getAdminInfoLogin),
    path('api/approvuserservice', views.updateUserServicesApprove)
]
