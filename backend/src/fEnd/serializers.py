from rest_framework import serializers
from .models import Tips, Users, Admin, Service


class TipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tips
        fields = ('_id', 'tip_title', 'tip_text',  'tip_img', 'user_id')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id', 'user_name', 'user_email',
                  'user_password', 'user_phon', 'user_img', 'user_bio')


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('admin_id', 'admin_name', 'admin_email', 'admin_password')


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('service_id', 'service_name', 'service_img', 'service_price')
