from django.contrib import admin
from .models import Tips, Users


# Register your models here.


class TipsAdmin(admin.ModelAdmin):
    list_display = ('tip_title', 'tip_text', 'tip_img')


# Register your models here.
admin.site.register(Tips, TipsAdmin)


class UsersAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'user_name', 'user_email',
                    'user_password', 'user_phon', 'user_img', 'user_bio')


admin.site.register(Users, UsersAdmin)
