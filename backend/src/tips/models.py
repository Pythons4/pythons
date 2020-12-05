from djongo import models

# Create your models here.

class Tips(models.Model):
    tip_id=models.ObjectIdField()
    tip_title=models.CharField(max_length=40)
    tip_text = models.TextField()
    tip_img = models.TextField()
    user_id=models.IntegerField()
    objects=models.DjongoManager()


class Fav(models.Model):
    fav_id=models.ObjectIdField()
    user_id=models.IntegerField()
    tip_id=models.IntegerField()


class TipCommints(models.Model):
    commint_id=models.ObjectIdField()
    tip_id=models.IntegerField()
    user_id=models.IntegerField()
    commint_text=models.TextField()