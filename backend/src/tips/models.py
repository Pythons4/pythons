from djongo import models

# Create your models here.

class Tips(models.Model):
    tip_id=models.ObjectIdField()
    tip_title=models.CharField(max_length=40)
    tip_text = models.TextField()
    tip_img = models.TextField()
    user_id=models.TextField()
    objects=models.DjongoManager()