
from django.urls import path
from . import views
from app.views import create_registereduser

urlpatterns = [
    path('login_registered_user', views.login_registered_user, name='login_registered_user'),
    path('register_user', views.register_user, name='register_user'),
]
