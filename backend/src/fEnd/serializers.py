from rest_framework import serializers
from .models import Tips


class TipsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tips
        fields = ('tip_id', 'tip_title', 'tip_text', 'tip_img')
