from django.db import models

class Seat(models.Model):
    flight_ID = models.ForeignKey('Flight', on_delete=models.CASCADE)
    seat_number = models.IntegerField()
    seat_type = models.CharField(max_length = 1) #B = business, O = Ordinary, C = Comfort
    availability = models.BooleanField()
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __int__ (self):
        return "Seat Number: " + self.seat_number

class User(models.Model):
    seat_ID = models.ForeignKey('Seat', on_delete=models.CASCADE)
    flight_ID = models.ForeignKey('Flight', on_delete=models.CASCADE)

    def __str__ (self):
        return "User ID: " + self.pk

class RegisteredUser(User):
    first_name = models.CharField(max_length = 20)
    last_name = models.CharField(max_length = 20)
    address = models.CharField(max_length = 20)

    def __str__(self):
        return self.first_name + " " + self.last_name

class Flight(models.Model):
    origin = models.CharField(max_length = 3) #code for the departure airport
    destination = models.CharField(max_length = 3) #code for the arrival airport
    date = models.DateField(auto_now=False, auto_now_add=False) #date of departure
    departure_time = models.TimeField(auto_now=False, auto_now_add=False) #time of departure
    arrival_time = models.TimeField(auto_now=False, auto_now_add=False) #time of arrival
    plane_ID = models.ForeignKey('Plane', on_delete=models.CASCADE) 

    #This displays the primary key in the django portal
    def __int__(self):
        return "Flight ID: " + self.pk


class Plane(models.Model):
    plane_model = models.CharField(max_length=50)
    seating_capacity = models.CharField(max_length=50)

    def __str__(self):
        return self.plane_model

class Crew(models.Model):
    first_name = models.CharField(max_length = 30)
    last_name = models.CharField(max_length = 30)
    flight_ID = models.ForeignKey('Flight', on_delete=models.CASCADE)

    def __str__(self):
        return self.first_name + " " + self.last_name

class Booking(models.Model):
    user_ID = models.ForeignKey('User', on_delete=models.CASCADE)
    flight_ID = models.ForeignKey('Flight', on_delete=models.CASCADE)
    insurance = models.BooleanField() #1 if insurance was purchase, 0 if no insurance was purchased

    def __str__(self):
        return "Booking ID: " + self.pk
