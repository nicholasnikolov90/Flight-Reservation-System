from django.db import models

class User(models.Model):
    seat_number = models.IntegerField()
    
#class Registered_Users(Users):
#    return


class Flight(models.Model):
    destination = models.CharField(max_length = 3)
    arrival = models.CharField(max_length = 3)

    #This displays the primary key in the django portal
    def __int__(self):
        return self.pk
    


class Booking(models.Model):
    user_ID = models.ForeignKey(User, on_delete=models.CASCADE)
    flight_ID = models.ForeignKey(Flight, on_delete=models.CASCADE)
