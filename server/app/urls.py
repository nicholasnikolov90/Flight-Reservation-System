from django.urls import path
from . import views


urlpatterns = [
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

#SEAT URLS
    path('seat-list/', views.show_all_seat, name='seat-list'), #URL for a list of all seats
    path('seat-detail/<int:pk>/', views.show_seat, name='seat-detail'), #URL for a single seat
    path('seat-create/', views.create_seat, name='seat-create'), #adds a new seat to the database
    path('seat-update/<int:pk>', views.update_seat, name='seat-update'), #modifies an existing seat in the database
    path('seat-delete/<int:pk>', views.delete_seat, name='seat-delete'), #deletes an existing seat in the database

]