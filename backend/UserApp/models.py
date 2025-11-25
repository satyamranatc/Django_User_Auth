from django.db import models


class UserModel(models.Model):
    fullName = models.CharField(max_length=100)
    avatar = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    role = models.Choices = ['admin', 'manager', 'user']

    def __str__(self):
        return self.fullName

