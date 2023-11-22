from django.shortcuts import get_object_or_404, render, redirect
from django.shortcuts import render
from django.http import HttpResponse
from . import models
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import FlightSerializer, UserSerializer, RegisteredUserSerializer, SeatSerializer
from . models import Flight, User, RegisteredUser, Seat, Plane, Crew, Booking 

"""
FLIGHT VIEWS

FUNCTIONS:
flight_overview - shows which URL's are dedicated to flights
show_all_flights - shows a list of all flights in the database (returns ALL info for ALL flights)
show_flight - shows info for a single flight
create_flight - add a new flight to the database
update_flight - modify an existing flight
delete_flight - delete an existing flight
"""

#shows all of the URLS related to flights
@api_view(['GET'])
#common views:
def flight_overview(request):
    flight_urls = {
        'List': '/flight-list/',
        'Detail': '/flight-detail/<int:id>',
        'Create': '/flight-create', 
        'Update': 'flight-update/<int:id>',
        'Delete': '/flight-detail/<int:id>',
    }
    return Response(flight_urls)

#returns a list of all flights in the database
@api_view(['GET'])
def show_all_flights(request):
    flights = Flight.objects.all()
    serializer = FlightSerializer(flights, many=True)
    return Response(serializer.data)

#return the information for a single flight, by entering its privatekey (pk)
@api_view(['GET'])
def show_flight(request, pk):
    flight = Flight.objects.get(id=pk)
    serializer = FlightSerializer(flight, many=False)
    return Response(serializer.data)

#create a new flight
@api_view(['POST'])
def create_flight(request):
    serializer = FlightSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

#Update an existing flight
@api_view(['POST'])
def update_flight(request, pk):
    flight = Flight.objects.get(id=pk)
    serializer = FlightSerializer(instance = flight, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing flight
@api_view(['GET'])
def delete_flight(request, pk):
    flight = Flight.objects.get(id=pk)
    flight.delete()

    return Response('Flight deleted successfully')


"""
USER VIEWS

FUNCTIONS:
user_overview - shows which URL's are dedicated to users
show_all_users - shows a list of all users in the database (returns ALL info for ALL users)
show_user - shows info for a single user
create_user - add a new user to the database
update_user - modify an existing user
delete_user - delete an existing user
"""

#shows all of the URLS related to flights
@api_view(['GET'])
#common views:
def user_overview(request):
    user_urls = {
        'List': '/user-list/',
        'Detail': '/user-detail/<int:id>',
        'Create': '/user-create', 
        'Update': 'user-update/<int:id>',
        'Delete': '/user-detail/<int:id>',
    }
    return Response(user_urls)

#returns a list of all users in the database
@api_view(['GET'])
def show_all_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

#return the information for a single user, by entering its privatekey (pk)
@api_view(['GET'])
def show_user(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(flight, many=False)
    return Response(serializer.data)

#create a new user
@api_view(['POST'])
def create_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

#Update an existing user
@api_view(['POST'])
def update_user(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(instance = user, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing user
@api_view(['GET'])
def delete_user(request, pk):
    user = User.objects.get(id=pk)
    user.delete()

    return Response('User deleted successfully')


"""
Seat VIEWS

FUNCTIONS:
seat_overview - shows which URL's are dedicated to seats
show_all_seat - shows a list of all users in the database (returns ALL info for ALL seats)
show_seat - shows info for a single seat
create_seat - add a new seat to the database
update_seat - modify an existing seat
delete_seat - delete an existing seat
"""


#shows all of the URLS related to seats
@api_view(['GET'])
#common views:
def seat_overview(request):
    user_urls = {
        'List': '/seat-list/',
        'Detail': '/seat-detail/<int:id>',
        'Create': '/seat-create', 
        'Update': 'seat-update/<int:id>',
        'Delete': '/seat-detail/<int:id>',
    }
    return Response(user_urls)

#returns a list of all seats in the database
@api_view(['GET'])
def show_all_seat(request):
    seats = Seat.objects.all()
    serializer = SeatSerializer(seats, many=True)
    return Response(serializer.data)

#return the information for a single seat, by entering its privatekey (pk)
@api_view(['GET'])
def show_seat(request, pk):
    seat = Seat.objects.get(id=pk)
    serializer = SeatSerializer(seat, many=False)
    return Response(serializer.data)

#create a new seat
@api_view(['POST'])
def create_seat(request):
    serializer = SeatSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

#Update an existing seat
@api_view(['POST'])
def update_seat(request, pk):
    seat = Seat.objects.get(id=pk)
    serializer = SeatSerializer(instance = seat, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing seat
@api_view(['GET'])
def delete_seat(request, pk):
    seat = Seat.objects.get(id=pk)
    seat.delete()

    return Response('Seat deleted successfully')

















#USER VIEWS

# Create your views here.
def book_ticket(request, user_id, flight_id):
   # user_profile = get_object_or_404(Users, user_id=user_id)
   # flight = get_object_or_404(Flights, flight_id=flight_id)

    #Check if the user is already assigned on the flight
    #existing_assignment = UserFlightAssignment.objects.filter(user_profile=user_profile, flight=flight).exists()

    #if not existing:
    #    Users.objects.create(user_profile=user_profile, flight = flight)

    return redirect('success')
 

#def cancel_ticket(request, booking_id):

#def make_payment(request):



#System Admin views:
#def flight_delete(request):



#def modify_flights(request, flight_id):

#def browse_aircraft_inventory(request):



#def all_user(request):
#    return HttpResponse('Return all users')
