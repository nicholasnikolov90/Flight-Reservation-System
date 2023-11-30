from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth.forms import UserCreationForm
from . import views
from app.views import create_registereduser


# Create your views here.

#used to login a registered user
#The 'AUTHENTICATE/LOGIN.HTML NEEDS TO BE REPLACED BY THE LOGIN HTML PAGE
def login_registered_user(request):
    if request.method == "POST":
        username = request.POST["username"] #username variable should match front end variable
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return JsonResponse(status=200)
        else: 
            pass
    else: 
        return render(request, 'authenticate/login.html', {})

#registers a new user, Need to fill in the correct links
def register_user(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password = password)
            login(request, user)


    #adds the user to the database we're using
    create_registereduser(request)
    return render(request, 'authenticate/register.html', {
        'form': form,
    })