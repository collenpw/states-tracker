from django.db import models

# Create your models here.

class State(models.Model):
    name=models.CharField(max_length=20)
    date=models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.name