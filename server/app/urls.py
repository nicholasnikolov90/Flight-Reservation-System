from django.urls import path
from . import views


urlpatterns = [
    path('', views.flight_overview, name='flight_overview'),
    path('flight-list/', views.show_all_flights, name='flight-list')

]