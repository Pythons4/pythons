from django.contrib import admin
from .models import Tips

# Register your models here.


class TipsAdmin(admin.ModelAdmin):  # add this
    list_display = ('tip_title', 'tip_text', 'tip_img')  # add this


# Register your models here.
admin.site.register(Tips, TipsAdmin)  # add this
