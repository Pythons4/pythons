from cloudinary.models import CloudinaryField
from django.db import models
from djongo import models
from bson.objectid import ObjectId
import cloudinary
from cloudinary.forms import CloudinaryJsFileField


# Create your models here.

# user table


class Users(models.Model):
    _id = models.ObjectIdField()
    user_name = models.TextField(blank=False, default='')
    user_email = models.TextField(blank=False, default='')
    user_password = models.TextField(blank=False, default='')
    user_phon = models.TextField(blank=False, default='')
    user_img = models.TextField()
    user_bio = models.TextField(default='')
    objects = models.DjongoManager()

# admin table


class Admin(models.Model):
    _id = models.ObjectIdField()
    admin_name = models.TextField(blank=False, default='')
    admin_email = models.TextField(blank=False, default='')
    admin_password = models.TextField(blank=False, default='')
    objects = models.DjongoManager()


# services table


class Service(models.Model):
    # service_id = models.ObjectIdField()
    _id = models.ObjectIdField()
    service_name = models.TextField(blank=False, default='')
    service_img = models.TextField(blank=False)
    service_price = models.TextField()
    objects = models.DjongoManager()


class UserService(models.Model):
    _id = models.ObjectIdField()
    user_id = models.TextField()
    service_id = models.TextField()
    user_service_location = models.TextField()
    user_service_date = models.DateField()
    user_service_hours = models.IntegerField()


# tips table

class Tip(models.Model):
    _id = models.ObjectIdField()
    tip_title = models.CharField(max_length=40, blank=False, default='')
    tip_text = models.TextField(blank=False, default='')
    tip_img = models.TextField(blank=False)
    user_id = models.TextField()
    objects = models.DjongoManager()


class UserTips(models.Model):
    _id = models.ObjectIdField()
    user_id = models.TextField()
    tip_id = models.TextField()
    objects = models.DjongoManager()


class Fav(models.Model):
    _id = models.ObjectIdField()
    user_id = models.IntegerField()
    tip_id = models.IntegerField()
    objects = models.DjongoManager()


class TipCommints(models.Model):
    _id = models.ObjectIdField()
    tip_id = models.IntegerField()
    commint_text = models.TextField(max_length=40, blank=False, default='')
    user_id = models.TextField()
    objects = models.DjongoManager()


class Products(models.Model):
    _id = models.ObjectIdField()
    product_name = models.CharField(max_length=40, blank=False, default='')
    product_price = models.IntegerField()
    product_quantity = models.IntegerField()
    product_type = models.BooleanField()
    product_description = models.TextField()


class UserProducts(models.Model):
    _id = models.ObjectIdField()
    user_id = models.TextField()
    product_id = models.TextField()
    user_product_location = models.TextField()
    user_product_quantity = models.IntegerField()
