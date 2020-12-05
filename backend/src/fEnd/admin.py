from django.contrib import admin
from .models import Tips,Users,Admin,Service

class UsersAdmin(admin.ModelAdmin):  
  list_display = ( 'user_id', 'user_name', 'user_email', 'user_password', 'user_phon', 'user_img', 'user_bio')


class AdminsAdmin(admin.ModelAdmin):  
  list_display = ( 'admin_name', 'admin_email', 'admin_password')

class ServicesAdmin(admin.ModelAdmin):  
  list_display = ('service_id', 'service_name', 'service_img', 'service_price')

admin.site.register(Tips) 
admin.site.register(Users,UsersAdmin) 
admin.site.register(Admin,AdminsAdmin) 
admin.site.register(Service,ServicesAdmin) 