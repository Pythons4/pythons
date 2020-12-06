from django.contrib import admin
from .models import Tip,Users,Admin,Service, UserService, TipCommints, Fav, Products, UserProducts



class TipsAdmin(admin.ModelAdmin):
    list_display = ('_id', 'tip_img', 'tip_title',
                    'tip_text', 'user_id')

class AdminsAdmin(admin.ModelAdmin):  
  list_display = ( 'admin_name', 'admin_email', 'admin_password')

class ServicesAdmin(admin.ModelAdmin):  
  list_display = ('service_id', 'service_name', 'service_img', 'service_price')

class UserServiceAdmin(admin.ModelAdmin):  
  list_display = ('user_service_id', 'user_id', 'service_id', 'user_service_location','user_service_date','user_service_hours')

class TipCommintsAdmin(admin.ModelAdmin):  
  list_display = ('commint_id', 'tip_id', 'user_id',  'commint_text')

class FavAdmin(admin.ModelAdmin):  
  list_display = ('fav_id', 'user_id', 'tip_id')

class UsersAdmin(admin.ModelAdmin):
      list_display = ('user_id', 'user_name', 'user_email', 'user_password', 'user_phon', 'user_img', 'user_bio')


class ProductsAdmin(admin.ModelAdmin):  
  list_display = ('product_id', 'product_name', 'product_price','product_quantity','product_type','product_description')

class UserProductsAdmin(admin.ModelAdmin):  
  list_display = ('user_product_id', 'user_id', 'product_id','user_product_location','user_product_quantity')

# Register your models here.
admin.site.register(Tip, TipsAdmin)
admin.site.register(Products,ProductsAdmin)
admin.site.register(Fav,FavAdmin)
admin.site.register(TipCommints,TipCommintsAdmin)
admin.site.register(UserService,UserServiceAdmin)
admin.site.register(Users,UsersAdmin) 
admin.site.register(UserProducts,UserProductsAdmin) 
admin.site.register(Admin,AdminsAdmin) 
admin.site.register(Service,ServicesAdmin) 




