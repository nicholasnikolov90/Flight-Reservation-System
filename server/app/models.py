# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Booking(models.Model):
    booking_id = models.AutoField(db_column='booking_ID', primary_key=True)  # Field name made lowercase.
    user = models.ForeignKey('User', on_delete=models.CASCADE, db_column='user_ID', blank=True, null=True)  # Field name made lowercase.
    flight = models.ForeignKey('Flight', on_delete=models.CASCADE, db_column='flight_ID', blank=True, null=True)  # Field name made lowercase.
    insurance = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Booking'


class Crew(models.Model):
    crew_id = models.AutoField(db_column='crew_ID', primary_key=True)  # Field name made lowercase.
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    flight = models.ForeignKey('Flight', on_delete=models.CASCADE, db_column='flight_ID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Crew'


class Flight(models.Model):
    flight_id = models.AutoField(db_column='flight_ID', primary_key=True)  # Field name made lowercase.
    origin = models.CharField(max_length=3, blank=True, null=True)
    destination = models.CharField(max_length=3, blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    departure_time = models.TimeField(blank=True, null=True)
    arrival_time = models.TimeField(blank=True, null=True)
    plane = models.ForeignKey('Plane', on_delete=models.CASCADE, db_column='plane_ID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Flight'


class Plane(models.Model):
    plane_id = models.AutoField(db_column='plane_ID', primary_key=True)  # Field name made lowercase.
    plane_model = models.CharField(max_length=50, blank=True, null=True)
    seating_capacity = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Plane'


class Seat(models.Model):
    seat_id = models.AutoField(db_column='seat_ID', primary_key=True)  # Field name made lowercase.
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, db_column='flight_ID', blank=True, null=True)  # Field name made lowercase.
    seat_number = models.IntegerField(blank=True, null=True)
    seat_type = models.CharField(max_length=1, blank=True, null=True)
    availability = models.IntegerField(blank=True, null=True)
    price = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Seat'


class User(models.Model):
    user_id = models.AutoField(db_column='user_ID', primary_key=True)  # Field name made lowercase.
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE, db_column='seat_ID', blank=True, null=True)  # Field name made lowercase.
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, db_column='flight_ID', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'User'


class RegisteredUser(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, db_column='user_ID', primary_key=True)  # Field name made lowercase.
    first_name = models.CharField(max_length=20, blank=True, null=True)
    last_name = models.CharField(max_length=20, blank=True, null=True)
    address = models.CharField(max_length=20, blank=True, null=True)
    user_name = models.CharField(max_length=20, blank=True, null=True)
    pass_word = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'registeredUser'
