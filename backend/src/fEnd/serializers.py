from rest_framework import serializers
from .models import Tip, Users, Admin,Service, UserService, TipCommints, Fav, Products, UserProducts


class TipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tip
        fields = ('_id', 'tip_title', 'tip_text',  'tip_img', 'user_id')



class TipCommintsSerializer(serializers.ModelSerializer):
  class Meta:
    model = TipCommints
    fields = ('commint_id', 'tip_id', 'user_id',  'commint_text')

class UsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = Users
    fields = ('user_id', 'user_name', 'user_email', 'user_password', 'user_phon', 'user_img', 'user_bio')

class AdminSerializer(serializers.ModelSerializer):
  class Meta:
    model = Admin
    fields = ('admin_id', 'admin_name', 'admin_email', 'admin_password')

class ServiceSerializer(serializers.ModelSerializer):
  class Meta:
    model = Service
    fields = ('service_id', 'service_name', 'service_img', 'service_price')

class UserServiceSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserService
    fields = ('user_service_id', 'user_id', 'service_id', 'user_service_location','user_service_date','user_service_hours')

class FavSerializer(serializers.ModelSerializer):
  class Meta:
    model = Fav
    fields = ('fav_id', 'user_id', 'tip_id')

class ProductsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Products
    fields = ('product_id', 'product_name', 'product_price','product_quantity','product_type','product_description')

class UserProductsSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserProducts
    fields = ('user_product_id', 'user_id', 'product_id','user_product_location','user_product_quantity')
  
