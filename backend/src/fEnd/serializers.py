from rest_framework import serializers
from .models import Tip, Users, Admin, Service, UserService, TipCommints
from .models import Fav, Products, UserProducts, UserTips


class TipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tip
        fields = ('_id', 'tip_title', 'tip_text',  'tip_img', 'user_id')


class TipCommintsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipCommints
        fields = ('_id', 'tip_id', 'user_id',  'commint_text')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('_id', 'user_name', 'user_email', 'user_password',
                  'user_phon', 'user_img', 'user_bio')


# class UserTipsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserTips
#         fields = ('_id', 'tip_id', 'user_id')


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('_id', 'admin_name', 'admin_email', 'admin_password')


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('_id', 'service_name', 'service_img', 'service_price')


class UserServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserService
        fields = ('_id', 'user_id', 'service_id', 'user_service_location',
                  'user_service_date', 'user_service_hours')


class FavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fav
        fields = ('_id', 'user_id', 'tip_id')


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('_id', 'product_name', 'product_price',
                  'product_quantity', 'product_type', 'product_description')


class UserProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProducts
        fields = ('_id', 'user_id', 'product_id',
                  'user_product_location', 'user_product_quantity')
