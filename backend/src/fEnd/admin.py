from django.contrib import admin
from .models import Tips,Users

class UsersAdmin(admin.ModelAdmin):  
  list_display = ( 'user_id', 'user_name', 'user_email', 'user_password', 'user_phon', 'user_img', 'user_bio')
admin.site.register(Tips) 
admin.site.register(Users,UsersAdmin) 