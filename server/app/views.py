from django.shortcuts import get_object_or_404, render, redirect
from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.hashers import check_password
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
from django.test import RequestFactory
from .serializers import FlightSerializer, UserSerializer, RegisteredUserSerializer, SeatSerializer, BookingSerializer, PlaneSerializer, CrewSerializer
from .models import Flight, User, RegisteredUser, Seat, Plane, Crew, Booking 


""" NON-ENTITY RELATED FUNCTIONS
These functions satisy some of the other project requirements that aren't just CRUD"""
#create a new booking for an unregistered user
@api_view(['POST'])
def create_booking_unreg(request, pk):
    factory = RequestFactory()

    custom_data = {
        "seat": pk,
        "flight": request.data.get('flight')
    }

    custom_request = factory.post('/user-create', data=custom_data) 

    user_response = create_user(custom_request)
    user_response_data = user_response.data

    custom = {
        "user": user_response_data.get('user_id'),
        "flight": request.data.get('flight'),
        "insurance": request.data.get('insurance'),
    }

    serializer = BookingSerializer(data=custom)

    if serializer.is_valid():
        serializer.save()
        seat = Seat.objects.filter(seat_id=pk).update(availability=0)

    return Response(serializer.data)


#create a new booking for a registered user
@api_view(['POST'])
def create_booking(request, pk):
    user = request.data.get('user_name')
    userid = RegisteredUser.objects.filter(user_name=user).first()

    custom = {
        "user": userid.user_id,
        "flight": request.data.get('flight'),
        "insurance": request.data.get('insurance'),
    }

    serializer = BookingSerializer(data=custom)

    if serializer.is_valid():
        serializer.save()
        seat = Seat.objects.filter(seat_id=pk).update(availability=0)

    return Response(serializer.data)


#sends an email receipt to the user
@api_view(['POST'])
def send_email(request):
    price = request.data.get('price')
    seat = request.data.get('seat_id')

    subject = 'Flight Receipt'
    message = f"Congratulations on your purchase of the flight, you will be sitting in seat number: {seat}, and you paid: {price}"
    from_email = 'flight_reservation@gmail.com'
    recipient = ['nicknikolov7@gmail.com']

    send_mail(subject, message, from_email, recipient)

    return Response('Email sent successfully!')

#adds the username and password of the registered user to the database
#create a new registereduser


@api_view(['POST'])
def create_registereduser(request):
    factory = RequestFactory()
    null_request = factory.post('/user-create', data=None)  # Adjust the path as needed
    user_response_data = create_user(null_request).data

    serializer_data = {**request.data, 'user': user_response_data.get('user_id')}  # Add user_id to the data

    serializer = RegisteredUserSerializer(data=serializer_data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

#checks if the input username and password matches with any registered user
@api_view(['POST'])
def login(request):
    user = request.data.get('user_name')
    passw = request.data.get('pass_word')
    registered_user = RegisteredUser.objects.filter(user_name=user).first()

    if registered_user:
        # Check each user to see if the provided password matches
        if passw == registered_user.pass_word:
            serializer = RegisteredUserSerializer(registered_user, many=False)
            return Response(status=200)

    return Response(status=400)

#returns all seats on a single flight
@api_view(['GET'])
def seats_on_flight(request, pk):
    seats = Seat.objects.filter(flight=pk)
    serializer = SeatSerializer(seats, many=True)
    return Response(serializer.data)

"""#Make payment
@api_view(['POST'])
def make_payment(request, flight_pk, seat_pk, user_id):
    seat = Seat.objects.filter(seat__in=seat_pk).update(availability=0)

    serializer = SeatSerializer(seat, many=True)

    user = User.objects.get(user_id=pk)
    serializer = UserSerializer(instance = user, data=request.data)
    combined = {}

    if serializer.is_valid():
        new_flight_id = request.data.get('flight_ID') 

        #returns true if a new flight ID is assigned to the user, this assumes the user paid for the ticket if the new flight is assigned to them.
        if user.flight_id != new_flight_id:
                combined = {
                'Payment': 'Payment was successful!',
            }
        else: 
            combined = {
                'Payment': 'No payment was made'
            }
         
        serializer.save()
    return Response(combined)"""

#returns all the crew members for a specific flight (pk = flight_id)
@api_view(['GET'])
def crew_on_flight(request, pk):
    flight = Flight.objects.filter(flight_id=pk)
    crew = Crew.objects.filter(flight=pk)

    f_serializer = FlightSerializer(flight, many=True)
    c_serializer = CrewSerializer(crew, many=True)

    combined = {
        'Flight': f_serializer.data,
        'Crew': c_serializer.data,
    }

    return Response(combined)

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
    flight = Flight.objects.get(flight_id=pk)
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
    flight = Flight.objects.get(flight_id=pk)
    serializer = FlightSerializer(instance = flight, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing flight
@api_view(['GET', 'DELETE'])
def delete_flight(request, pk):
    flight = Flight.objects.get(flight_id=pk)

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
    user = User.objects.get(user_id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

#create a new user
@api_view(['POST'])
def create_user(request):
    
    if request is None:
        user_data = {'seat': None, 'flight': None}
    else:
        user_data = request.data

    serializer = UserSerializer(data = user_data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#Update an existing user
@api_view(['POST'])
def update_user(request, pk):
    user = User.objects.get(user_id=pk)
    serializer = UserSerializer(instance = user, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing user
@api_view(['GET', 'DELETE'])
def delete_user(request, pk):
    user = User.objects.get(user_id=pk)
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
def show_all_seats(request):
    seats = Seat.objects.all()
    serializer = SeatSerializer(seats, many=True)
    return Response(serializer.data)

#return the information for a single seat, by entering its privatekey (pk)
@api_view(['GET'])
def show_seat(request, pk):
    seat = Seat.objects.get(seat_id=pk)
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
    seat = Seat.objects.get(seat_id=pk)
    serializer = SeatSerializer(instance = seat, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing seat
@api_view(['GET', 'DELETE'])
def delete_seat(request, pk):
    seat = Seat.objects.get(seat_id=pk)
    seat.delete()

    return Response('Seat deleted successfully')



"""
BOOKING VIEWS

FUNCTIONS:
booking_overview - shows which URL's are dedicated to booking
show_all_booking - shows a list of all flights in the database (returns ALL info for ALL booking)
show_booking - shows info for a single booking
create_booking - add a new booking to the database
update_booking - modify an existing booking
delete_booking - delete an existing booking
"""

#shows all of the URLS related to bookings
@api_view(['GET'])
def booking_overview(request):
    booking_urls = {
        'List': '/booking-list/',
        'Detail': '/booking-detail/<int:id>',
        'Create': '/booking-create', 
        'Update': 'booking-update/<int:id>',
        'Delete': '/booking-detail/<int:id>',
    }
    return Response(booking_urls)

#returns a list of all bookings in the database
@api_view(['GET'])
def show_all_bookings(request):
    bookings = Booking.objects.all()
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

#return the information for a single booking, by entering its privatekey (pk)
@api_view(['GET'])
def show_booking(request, pk):
    booking = Booking.objects.get(booking_id=pk)
    serializer = BookingSerializer(booking, many=False)
    return Response(serializer.data)



#Update an existing booking
@api_view(['POST'])
def update_booking(request, pk):
    booking = Booking.objects.get(booking_id=pk)
    serializer = BookingSerializer(instance = booking, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing booking
@api_view(['GET', 'DELETE'])
def delete_booking(request, pk):
    booking = Booking.objects.get(booking_id=pk)
    booking.delete()

    return Response('Booking deleted successfully')


"""
CREW VIEWS

FUNCTIONS:
crew_overview - shows which URL's are dedicated to crews
show_all_crew - shows a list of all crews in the database (returns ALL info for ALL crews)
show_crew - shows info for a single crew
create_crew - add a new crew to the database
update_crew - modify an existing crew
delete_crew - delete an existing crew
"""

#shows all of the URLS related to crews
@api_view(['GET'])
#common views:
def crew_overview(request):
    crew_urls = {
        'List': '/crew-list/',
        'Detail': '/crew-detail/<int:id>',
        'Create': '/crew-create', 
        'Update': 'crew-update/<int:id>',
        'Delete': '/crew-detail/<int:id>',
    }
    return Response(crew_urls)

#returns a list of all crews in the database
@api_view(['GET'])
def show_all_crews(request):
    crews = Crew.objects.all()
    serializer = CrewSerializer(crews, many=True)
    return Response(serializer.data)

#return the information for a single crew Member, by entering its privatekey (pk)
@api_view(['GET'])
def show_crew(request, pk):
    crew = Crew.objects.get(crew_id=pk)
    serializer = CrewSerializer(crew, many=False)
    return Response(serializer.data)

#create a new crew member
@api_view(['POST'])
def create_crew(request):
    serializer = CrewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

#Update an existing crew
@api_view(['POST'])
def update_crew(request, pk):
    crew = Crew.objects.get(crew_id=pk)
    serializer = CrewSerializer(instance = crew, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing crew
@api_view(['GET', 'DELETE'])
def delete_crew(request, pk):
    crew = Crew.objects.get(crew_id=pk)
    crew.delete()

    return Response('Crew Member deleted successfully')

"""
PLANE VIEWS

FUNCTIONS:
plane_overview - shows which URL's are dedicated to planes
show_all_planes - shows a list of all planes in the database (returns ALL info for ALL planes)
show_plane - shows info for a single plane
create_plane - add a new plane to the database
update_plane - modify an existing plane
delete_plane - delete an existing plane
"""

#shows all of the URLS related to seats
@api_view(['GET'])
#common views:
def plane_overview(request):
    plane_urls = {
        'List': '/plane-list/',
        'Detail': '/plane-detail/<int:id>',
        'Create': '/plane-create', 
        'Update': 'plane-update/<int:id>',
        'Delete': '/plane-detail/<int:id>',
    }
    return Response(plane_urls)

#returns a list of all planes in the database
@api_view(['GET'])
def show_all_planes(request):
    planes = Plane.objects.all()
    serializer = PlaneSerializer(planes, many=True)
    return Response(serializer.data)

#return the information for a single plane, by entering its privatekey (pk)
@api_view(['GET'])
def show_plane(request, pk):
    plane = Plane.objects.get(plane_id=pk)
    serializer = PlaneSerializer(plane, many=False)
    return Response(serializer.data)

#create a new plane
@api_view(['POST'])
def create_plane(request):
    serializer = PlaneSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

#Update an existing plane
@api_view(['POST'])
def update_plane(request, pk):
    plane = Plane.objects.get(plane_id=pk)
    serializer = PlaneSerializer(instance = plane, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing splaneeat
@api_view(['GET', 'DELETE'])
def delete_plane(request, pk):
    plane = Plane.objects.get(plane_id=pk)
    plane.delete()

    return Response('Plane deleted successfully')


"""
REGISTERED USER VIEWS

FUNCTIONS:
registereduser_overview - shows which URL's are dedicated to registeredusers
show_all_registereduser - shows a list of all registeredusers in the database (returns ALL info for ALL registereduser)
show_registereduser - shows info for a single registereduser
create_registereduser - add a new registereduser to the database
update_registereduser - modify an existing registereduser
delete_registereduser - delete an existing registereduser
"""

#shows all of the URLS related to registereduser
@api_view(['GET'])
#common views:
def registereduser_overview(request):
    registereduser_urls = {
        'List': '/registereduser-list/',
        'Detail': '/registereduser-detail/<int:id>',
        'Create': '/registereduser-create', 
        'Update': 'registereduser-update/<int:id>',
        'Delete': '/registereduser-detail/<int:id>',
    }
    return Response(registereduser_urls)

#returns a list of all registereduser in the database
@api_view(['GET'])
def show_all_registeredusers(request):
    registeredusers = RegisteredUser.objects.all()
    serializer = RegisteredUserSerializer(registeredusers, many=True)
    return Response(serializer.data)

#return the information for a single registereduser, by entering its privatekey (pk)
@api_view(['GET'])
def show_registereduser(request, pk):
    registereduser = RegisteredUser.objects.get(user_id=pk)
    serializer = RegisteredUserSerializer(registereduser, many=False)
    return Response(serializer.data)



#Update an existing registereduser
@api_view(['POST'])
def update_registereduser(request, pk):
    registereduser = RegisteredUser.objects.get(user_id=pk)
    serializer = RegisteredUserSerializer(instance = registereduser, data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

#delete an existing registereduser
@api_view(['GET', 'DELETE'])
def delete_registereduser(request, pk):
    registereduser = RegisteredUser.objects.get(user_id=pk)
    registereduser.delete()

    return Response('Registed User deleted successfully')