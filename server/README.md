

Description of functions corresponding to rubric

1. Browse flights: show_all_flights()

2. select flight: show_flight(), this returns the details for one flight

3. browse seat map and select seat: show_all_seats(), this returns the details for all seats

4. make payment: make_payment() 

5. cancel flight: delete_flight()

6. cancellation notification: delete_flight(), will return a display message, front-end needs to dispaly the cancellation notificaiton somehow

7. browse passenger list: show_all_users(), since users all have a flight_id this only shows users that are registered on a flight.

8. payment receipt and ticket notificatoin by email: make_payment, will return a display message, front-end needs to display the receipt / notification

9. user registration: create_user

10. registered user login: server>register>views.py - login_registered_user, front-end needs to fill in the required links for the login page

11. manage promos for registered users: Managed from the front-end, check if the current user is a registered user, if yes, then change the ticket price.

12. Admin features:
12. a. maintain aircrafts: update_plane
12. b. maintain flights: update_flight
12. c. maintan crews: update_crew


Other requirements
1. Implement 2 design patterns
1st design pattern: MVC (Observer Pattern)
- is implemented with the models.py, views.py (this is actually the controller in django), and the view is implemented by the react front end.


How the code fits the design:
1. foreign key relationships in django are the method of implementing object oriented aggregation
2. The Registered USer is an extension of User (Since it has the oneToOneField)
3. 




