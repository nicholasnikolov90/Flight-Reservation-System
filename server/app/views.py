from django.shortcuts import get_object_or_404, render, redirect
from django.shortcuts import render
from django.http import HttpResponse
from . import models
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import FlightSerializer
from .models import Flight


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

@api_view(['GET'])
def show_all_flights(request):
    flights = Flight.objects.all()
    serializer = FlightSerializer(flights, many=True)
    return Response(serializer.data)


#USER VIEWS
#def user_form(request):




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
