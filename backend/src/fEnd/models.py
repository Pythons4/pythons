from djongo import models

# Create your models here.

# user table
class Users(models.Model):
    user_id=models.ObjectIdField()
    user_name = models.TextField()
    user_email = models.TextField()
    user_password = models.TextField()
    user_phon = models.TextField()
    user_img = models.TextField()
    user_bio = models.TextField()
    objects=models.DjongoManager()

# admin table
class Admin(models.Model):
    admin_id=models.ObjectIdField()
    admin_name = models.TextField()
    admin_email = models.TextField()
    admin_password = models.TextField()

# services table
class Service(models.Model):
    service_id = models.ObjectIdField()
    service_name = models.TextField()
    service_img = models.TextField()
    service_price=models.TextField()

class UserService(models.Model):
    user_service_id = models.ObjectIdField()
    user_id = models.TextField()
    service_id = models.TextField()
    user_service_location = models.TextField()
    user_service_date = models.DateField()
    user_service_hours = models.IntegerField()


# tips table
class Tips(models.Model):
    tip_id = models.ObjectIdField()
    tip_title = models.CharField(max_length=40)
    tip_text = models.TextField()
    tip_img = models.TextField()
    user_id = models.TextField()
    objects = models.DjongoManager()
#tipscomments table
class TipCommints(models.Model):
    commint_id = models.ObjectIdField()
    tip_id = models.TextField()
    user_id = models.TextField()
    commint_text = models.TextField()

class Fav(models.Model):
    fav_id = models.ObjectIdField()
    user_id = models.TextField()
    tip_id = models.TextField()


class Products(models.Model):
    product_id = models.ObjectIdField()
    product_name = models.CharField(max_length=40)
    product_price = models.IntegerField()
    product_quantity = models.IntegerField()
    product_type = models.BooleanField()
    product_description = models.TextField()

class UserProducts(models.Model):
    user_product_id = models.ObjectIdField()
    user_id = models.TextField()
    product_id = models.TextField()
    user_product_location = models.TextField()
    user_product_quantity = models.IntegerField()
    

