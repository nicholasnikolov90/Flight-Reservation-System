from django.shortcuts import get_object_or_404, render, redirect
from django.shortcuts import render
from django.http import HttpResponse
from . import models
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import FlightSerializer
from .models import Flight

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
