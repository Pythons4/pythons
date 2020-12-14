from cloudinary.models import CloudinaryField
from django.db import models
from djongo import models
from bson.objectid import ObjectId
import cloudinary
from cloudinary.forms import CloudinaryJsFileField
from django.conf import settings


# user table
class Users(models.Model):
    _id = models.ObjectIdField()
    user_name = models.TextField()
    user_email = models.TextField()
    user_password = models.TextField()
    user_phon = models.TextField()
    user_img = models.TextField()
    user_bio = models.TextField()


# admin table
class Admin(models.Model):
    _id = models.ObjectIdField()
    admin_name = models.TextField()
    admin_email = models.TextField()
    admin_password = models.TextField()
    objects = models.DjongoManager()


# services table
class Service(models.Model):
    _id = models.ObjectIdField()
    service_name = models.TextField()
    service_img = models.TextField()
    service_price = models.TextField()
    objects = models.DjongoManager()
    service_price = models.TextField()


# User Services table
class UserService(models.Model):
    _id = models.ObjectIdField()
    user_id = models.TextField()
    service_name = models.TextField()
    user_service_location = models.TextField()
    user_service_date = models.DateField()
    user_service_hours = models.IntegerField()


# tips table
class Tip(models.Model):
    _id = models.ObjectIdField()
    tip_title = models.CharField(max_length=40)
    tip_text = models.TextField()
    tip_img = models.TextField()
    user_id = models.TextField()

    def __str__(self):
        return self.tip_title

    def __str__(self):
        return self.tip_title


# Fav table
class Fav(models.Model):
    _id = models.ObjectIdField()
    user_id = models.IntegerField()
    tip_id = models.IntegerField()
    objects = models.DjongoManager()


# Tips Comments table
class TipCommints(models.Model):
    _id = models.ObjectIdField()
    tip_id = models.TextField()
    user_name = models.TextField()
    commint_text = models.TextField()
    objects = models.DjongoManager()


# Products table
class Products(models.Model):
    _id = models.ObjectIdField()
    product_name = models.CharField(max_length=40)
    product_price = models.IntegerField()
    product_quantity = models.IntegerField()
    product_type = models.BooleanField()
    product_description = models.TextField()
    product_img = models.TextField()
    # objects = models.DjongoManager()

    def __str__(self):
        return self.product_name


# User Product table
class UserProducts(models.Model):
    _id = models.ObjectIdField()
    user_id = models.TextField()
    # product_id = models.TextField()
    user_products = models.TextField()
    user_product_location = models.TextField()
    # user_product_quantity = models.IntegerField()
    objects = models.DjongoManager()
