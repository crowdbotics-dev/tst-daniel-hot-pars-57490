from django.conf import settings
from django.db import models
class Article(models.Model):
    'Generated Model'
    author = models.CharField(max_length=256,)
    image = models.URLField()
    title = models.CharField(max_length=256,)
    body = models.CharField(max_length=256,)
