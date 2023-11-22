from django.urls import path
from . import views


urlpatterns = [
    path('', views.flight_overview, name='flight_overview'),
    path('flight-list/', views.show_all_flights, name='flight-list'), #URL for a list of all flights
    path('flight-detail/<int:pk>/', views.show_flight, name='flight-detail'), #URL for a single flight
    path('flight-create/', views.create_flight, name='flight-create'), #adds a new flight to the database
    path('flight-update/<int:pk>', views.update_flight, name='flight-update'), #modifies an existing flight in the database
        path('flight-delete/<int:pk>', views.delete_flight, name='flight-delete'), #deletes an existing flight in the database



]