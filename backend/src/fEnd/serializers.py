from rest_framework import serializers
from .models import Tip, Users, Admin, Service, UserService, TipCommints,  Products, UserProducts, Fav


class TipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tip
        fields = ('_id', 'tip_title', 'tip_text',
                  'tip_img', 'user_id', "user_name", 'tip_date')


class TipCommintsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipCommints
        fields = ('_id', 'tip_id', 'user_name',  'commint_text')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('_id', 'user_name', 'user_email', 'user_password',
                  'user_phon', 'user_img', 'user_bio')


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('_id', 'admin_name', 'admin_email',
                  'admin_password', 'admin_img')


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('_id', 'service_name', 'service_img', 'service_price')


class UserServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserService
        fields = ('_id', 'user_id', 'service_name', 'user_service_location',
                  'user_service_date', 'user_service_hours', 'user_service_price',

                  'user_service_approv')


class FavSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fav
        fields = ('_id', 'user_id', 'tip_id',
                  'tip_img', 'tip_title', 'user_name')


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['_id', 'product_name', 'product_price',
                  'product_quantity', 'product_type', 'product_description',
                  'product_img']


class UserProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProducts
        fields = ('_id', 'user_id', 'user_products',
                  'user_product_location')
