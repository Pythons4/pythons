from rest_framework import serializers
from .models import Tips, Users

class TipsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tips
    fields = ('tip_id', 'tip_title', 'tip_text',  'tip_img' ,'user_id')

class UsersSerializer(serializers.ModelSerializer):
  class Meta:
    model = Users
    fields = ('user_id', 'user_name', 'user_email', 'user_password', 'user_phon', 'user_img', 'user_bio')