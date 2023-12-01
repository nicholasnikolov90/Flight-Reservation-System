from django.urls import path
from . import views


urlpatterns = [
    #COMBINED URLS
    path('crew-on-flight/<int:pk>', views.crew_on_flight, name='crew-on-flight'), #URL to return the crew on a specific flight
    path('seats-on-flight/<int:pk>', views.seats_on_flight, name='seats-on-flight'), #URL to return all seats on a specific flight

    #flight URLS
    path('flight-list/', views.show_all_flights, name='flight-list'), #URL for a list of all flights
    path('flight-detail/<int:pk>/', views.show_flight, name='flight-detail'), #URL for a single flight
    path('flight-create/', views.create_flight, name='flight-create'), #adds a new flight to the database
    path('flight-update/<int:pk>', views.update_flight, name='flight-update'), #modifies an existing flight in the database
    path('flight-delete/<int:pk>', views.delete_flight, name='flight-delete'), #deletes an existing flight in the database

    #USER URLS
    path('user-list/', views.show_all_users, name='user-list'), #URL for a list of all users
    path('user-detail/<int:pk>/', views.show_user, name='user-detail'), #URL for a single user
    path('user-create/', views.create_user, name='user-create'), #adds a new user to the database
    path('user-update/<int:pk>', views.update_user, name='user-update'), #modifies an existing user in the database
    path('user-delete/<int:pk>', views.delete_user, name='user-delete'), #deletes an existing user in the database
    path('user-payment/<int:pk>', views.make_payment, name='user-payment'), #user makes a payment

    #SEAT URLS
    path('seat-list/', views.show_all_seats, name='seat-list'), #URL for a list of all seats
    path('seat-detail/<int:pk>/', views.show_seat, name='seat-detail'), #URL for a single seat
    path('seat-create/', views.create_seat, name='seat-create'), #adds a new seat to the database
    path('seat-update/<int:pk>', views.update_seat, name='seat-update'), #modifies an existing seat in the database
    path('seat-delete/<int:pk>', views.delete_seat, name='seat-delete'), #deletes an existing seat in the database

    #BOOKING URLS
    path('booking-list/', views.show_all_bookings, name='booking-list'), #URL for a list of all bookings
    path('booking-detail/<int:pk>/', views.show_booking, name='seat-detail'), #URL for a single booking
    path('booking-create/', views.create_booking, name='booking-create'), #adds a new booking to the database
    path('booking-update/<int:pk>', views.update_booking, name='booking-update'), #modifies an existing booking in the database
    path('booking-delete/<int:pk>', views.delete_booking, name='booking-delete'), #deletes an existing booking in the database

    #CREW URLS
    path('crew-list/', views.show_all_crews, name='crew-list'), #URL for a list of all crews
    path('crew-detail/<int:pk>/', views.show_crew, name='crew-detail'), #URL for a single crew
    path('crew-create/', views.create_crew, name='crew-create'), #adds a new crew to the database
    path('crew-update/<int:pk>', views.update_crew, name='crew-update'), #modifies an existing crew in the database
    path('crew-delete/<int:pk>', views.delete_crew, name='crew-delete'), #deletes an existing crew in the database

    #PLANE URLS
    path('plane-list/', views.show_all_planes, name='plane-list'), #URL for a list of all planes
    path('plane-detail/<int:pk>/', views.show_plane, name='plane-detail'), #URL for a single plane
    path('plane-create/', views.create_plane, name='plane-create'), #adds a new plane to the database
    path('plane-update/<int:pk>', views.update_plane, name='plane-update'), #modifies an existing plane in the database
    path('plane-delete/<int:pk>', views.delete_plane, name='plane-delete'), #deletes an existing plane in the database

    #REGISTERED USER URLS
    path('registereduser-list/', views.show_all_registeredusers, name='registereduser-list'), #URL for a list of all registeredusers
    path('registereduser-detail/<int:pk>/', views.show_registereduser, name='registereduser-detail'), #URL for a single registereduser
    path('registereduser-create/', views.create_registereduser, name='registereduser-create'), #adds a new registereduser to the database
    path('registereduser-update/<int:pk>', views.update_registereduser, name='registereduser-update'), #modifies an existing registereduser in the database
    path('registereduser-delete/<int:pk>', views.delete_registereduser, name='registereduser-delete'), #deletes an existing registereduser in the database
]