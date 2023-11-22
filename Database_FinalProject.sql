create database ENSF614FinalProject;
use ENSF614FinalProject;

create table Plane(
	plane_ID int auto_increment primary key,
    plane_model char(50),
    seating_capacity char(50)
);

create table Flight(
	flight_ID int auto_increment primary key,
    origin char(3),
    destination char(3),
    date DATE,
    departure_time TIME,
    arrival_time TIME, 
    plane_ID int,
    
    foreign key (plane_ID) references Plane(plane_ID)
);

create table Seat(
	seat_ID int auto_increment primary key,
    flight_ID int,
    seat_number int, 
    seat_type char(1),
    availability boolean,
    price decimal(5,2),
    
    foreign key (flight_ID) references Flight(flight_ID)
);

create table User(
	user_ID int auto_increment primary key,
    seat_ID int,
    flight_ID int,
    
    foreign key (seat_ID) references Seat(seat_ID),
    foreign key (flight_ID) references Flight(flight_ID)
);

create table registeredUser(
	user_ID int primary key,
    first_name char(20),
    last_name char(20),
    address char(20),
    
    foreign key (user_ID) references User(user_ID)
);

create table Crew(
	crew_ID int auto_increment primary key, 
    first_name char(30),
    last_name char(30),
    flight_ID int,
    
    foreign key (flight_ID) references Flight(flight_ID)
);

create table Booking(
	booking_ID int auto_increment primary key,
    user_ID int, 
    flight_ID int, 
    insurance boolean,
    
    foreign key (user_ID) references User(user_ID),
    foreign key (flight_ID) references Flight(flight_ID)
);

INSERT INTO Plane (plane_model, seating_capacity) VALUES
('Boeing 747', '48'),
('Airbus A320', '48'),
('Boeing 777', '48'),
('Cessna 172', '48'),
('Embraer E190', '48'),
('Airbus A380', '48'),
('Boeing 737', '48'),
('Bombardier CRJ700', '48'),
('Airbus A330', '48'),
('Boeing 787', '48');

INSERT INTO Flight (origin, destination, date, departure_time, arrival_time, plane_ID)
VALUES
('JFK', 'LAX', '2023-11-22', '12:00:00', '15:30:00', 1),
('LHR', 'CDG', '2023-11-23', '09:30:00', '11:00:00', 2),
('SFO', 'SEA', '2023-11-24', '14:45:00', '16:15:00', 3),
('HND', 'ICN', '2023-11-25', '18:00:00', '21:30:00', 4),
('SYD', 'LAX', '2023-11-26', '08:00:00', '14:00:00', 5),
('DXB', 'LHR', '2023-11-27', '16:30:00', '23:00:00', 6),
('ATL', 'ORD', '2023-11-28', '10:15:00', '12:30:00', 7),
('PEK', 'HKG', '2023-11-29', '13:45:00', '15:30:00', 8),
('AMS', 'CDG', '2023-11-30', '11:00:00', '12:15:00', 9),
('LAX', 'JFK', '2023-12-01', '19:30:00', '23:00:00', 10);

INSERT INTO Seat (flight_ID, seat_number, seat_type, availability, price)
VALUES
(1, 1, 'B', 1, 500.00),
(1, 2, 'O', 1, 250.00),
(1, 3, 'C', 1, 350.00),
(2, 1, 'B', 1, 450.00),
(2, 2, 'O', 1, 300.00),
(2, 3, 'C', 1, 400.00),
(3, 1, 'B', 1, 550.00),
(3, 2, 'O', 1, 350.00),
(3, 3, 'C', 1, 450.00),
(4, 1, 'B', 1, 600.00);

INSERT INTO User (seat_ID, flight_ID)
VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 5),
(10, 5);

INSERT INTO registeredUser (user_ID, first_name, last_name, address)
VALUES
(1, 'John', 'Doe', '123 Main St'),
(2, 'Jane', 'Smith', '456 Oak St'),
(3, 'Bob', 'Johnson', '789 Pine St'),
(4, 'Alice', 'Williams', '456 Elm St'),
(5, 'Charlie', 'Brown', '789 Maple St'),
(6, 'Eva', 'Davis', '123 Birch St'),
(7, 'Frank', 'Martin', '456 Cedar St'),
(8, 'Grace', 'Taylor', '789 Oak St'),
(9, 'Henry', 'Clark', '123 Pine St'),
(10, 'Isabel', 'Anderson', '456 Maple St');

INSERT INTO Crew (first_name, last_name, flight_ID)
VALUES
('Alice', 'Pilot', 1),
('Bob', 'Attendant', 1),
('Charlie', 'Pilot', 2),
('David', 'Attendant', 2),
('Eva', 'Pilot', 3),
('Frank', 'Attendant', 3),
('Grace', 'Pilot', 4),
('Henry', 'Attendant', 4),
('Isabel', 'Pilot', 5),
('Jack', 'Attendant', 5);

INSERT INTO Booking (user_ID, flight_ID, insurance)
VALUES
(1, 1, 1),
(2, 1, 0),
(3, 2, 1),
(4, 2, 0),
(5, 3, 1),
(6, 3, 1),
(7, 4, 0),
(8, 4, 1),
(9, 5, 0),
(10, 5, 1);
