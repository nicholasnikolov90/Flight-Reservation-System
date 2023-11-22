from django.contrib import admin
from . models import Flight, User, RegisteredUser, Seat, Plane, Crew, Booking 


# Register your models here.
admin.site.register(Flight)
admin.site.register(User)
admin.site.register(RegisteredUser)
admin.site.register(Seat)
admin.site.register(Plane)
admin.site.register(Crew)
admin.site.register(Booking)