from django.db import models

# Create your models here.

class Users(models.Model):
    user_ID = models.AutoField(primary_key=True, db_column="User_ID")
    seat_number = models.IntegerField()

class Flights(models.Model):
    flight_ID = models.AutoField(primary_key=True, db_column="Flight_ID")
    destination = models.CharField(max_length = 3)
    arrival = models.CharField(max_length = 3)

