from django.db import models

# Create your models here.

class Users(models.Model):
    seat_number = models.IntegerField(max_length = 2)
    user_ID = models.IntegerField(max_length = 4)

class Flights(models.Model):
    flight_ID = models.IntegerField(max_length = 4)
    destination = models.CharField(max_length = 3)
    arrival = models.CharField(max_length = 3)

