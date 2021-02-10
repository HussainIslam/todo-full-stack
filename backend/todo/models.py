from django.db import models

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=100)
    iscomplete = models.BooleanField(default=False)
    added = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    