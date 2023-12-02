DROP DATABASE IF EXISTS ENSF614FinalProject;
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
    
    foreign key (plane_ID) references Plane(plane_ID) ON DELETE CASCADE
);

create table Seat(
	seat_ID int auto_increment primary key,
    flight_ID int,
    seat_number int, 
    seat_type char(1),
    availability boolean,
    price decimal(5,2),
    
    foreign key (flight_ID) references Flight(flight_ID) ON DELETE CASCADE
);

create table User(
	user_ID int auto_increment primary key,
    seat_ID int,
    flight_ID int,
    
    foreign key (seat_ID) references Seat(seat_ID) ON DELETE CASCADE,
    foreign key (flight_ID) references Flight(flight_ID) ON DELETE CASCADE
);

create table registeredUser(
	user_ID int primary key,
    first_name char(20),
    last_name char(20),
    address char(20),
    user_name char(20),
    pass_word char(20),
    
    foreign key (user_ID) references User(user_ID) ON DELETE CASCADE
);

create table Crew(
	crew_ID int auto_increment primary key, 
    first_name char(30),
    last_name char(30),
    flight_ID int,
    
    foreign key (flight_ID) references Flight(flight_ID) ON DELETE CASCADE
);

create table Booking(
	booking_ID int auto_increment primary key,
    user_ID int, 
    flight_ID int, 
    insurance boolean,
    
    foreign key (user_ID) references User(user_ID) ON DELETE CASCADE,
    foreign key (flight_ID) references Flight(flight_ID) ON DELETE CASCADE
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

-- all comfort seats
INSERT INTO Seat (flight_ID, seat_number, seat_type, availability, price)
VALUES
(1, 4, 'C', 1, 350.00),
(1, 5, 'C', 1, 350.00),
(1, 6, 'C', 1, 350.00),
(1, 7, 'C', 1, 350.00),
(1, 8, 'C', 1, 350.00),
(1, 9, 'C', 1, 350.00),
(1, 10, 'C', 1, 350.00),
(1, 11, 'C', 1, 350.00),
(1, 12, 'C', 1, 350.00),
(1, 13, 'C', 1, 350.00),
(1, 14, 'C', 1, 350.00),
(1, 15, 'C', 1, 350.00);

-- All business seats
INSERT INTO Seat (flight_ID, seat_number, seat_type, availability, price)
VALUES
(1, 16, 'B', 1, 500.00),
(1, 17, 'B', 1, 500.00),
(1, 18, 'B', 1, 500.00),
(1, 19, 'B', 1, 500.00),
(1, 20, 'B', 1, 500.00),
(1, 21, 'B', 1, 500.00),
(1, 22, 'B', 1, 500.00),
(1, 23, 'B', 1, 500.00),
(1, 24, 'B', 1, 500.00),
(1, 25, 'B', 1, 500.00),
(1, 26, 'B', 1, 500.00),
(1, 27, 'B', 1, 500.00);

-- All ordinary seats
INSERT INTO Seat (flight_ID, seat_number, seat_type, availability, price)
VALUES
(1, 28, 'O', 1, 250.00),
(1, 29, 'O', 1, 250.00),
(1, 30, 'O', 1, 250.00),
(1, 31, 'O', 1, 250.00),
(1, 32, 'O', 1, 250.00),
(1, 33, 'O', 1, 250.00),
(1, 34, 'O', 1, 250.00),
(1, 35, 'O', 1, 250.00),
(1, 36, 'O', 1, 250.00),
(1, 37, 'O', 1, 250.00),
(1, 38, 'O', 1, 250.00),
(1, 39, 'O', 1, 250.00),
(1, 40, 'O', 1, 250.00),
(1, 41, 'O', 1, 250.00),
(1, 42, 'O', 1, 250.00),
(1, 43, 'O', 1, 250.00),
(1, 44, 'O', 1, 250.00),
(1, 45, 'O', 1, 250.00),
(1, 46, 'O', 1, 250.00),
(1, 47, 'O', 1, 250.00),
(1, 48, 'O', 1, 250.00);

update Seat
set seat_type = 'C', price = 350
where flight_ID = 1 and seat_number between 1 and 12;

update Seat
set seat_type = 'B', price = 500
where flight_ID = 1 and seat_number between 13 and 24;

update Seat 
set seat_type = 'O', price = 250
where flight_ID = 1 and seat_number between 25 and 48;

-- select * 
-- from Seat
-- where flight_ID = 1
-- order by seat_number asc;

-- Comfort seats
INSERT INTO User (seat_ID, flight_ID)
VALUES
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1);

-- Business seats
INSERT INTO User (seat_ID, flight_ID)
VALUES
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1);

-- Ordinary seats
INSERT INTO User (seat_ID, flight_ID)
VALUES
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1);

-- select *
-- from User
-- where flight_ID = 1;

INSERT INTO registeredUser (user_ID, first_name, last_name, address)
VALUES
(11, 'Emma', 'Johnson', '123 Main St, Apt 11'),
(12, 'Noah', 'Smith', '456 Oak St, Apt 12'),
(13, 'Olivia', 'Williams', '789 Pine St, Apt 13'),
(14, 'Liam', 'Brown', '456 Elm St, Apt 14'),
(15, 'Ava', 'Jones', '789 Maple St, Apt 15'),
(16, 'Mia', 'Davis', '123 Birch St, Apt 16'),
(17, 'Sophia', 'Taylor', '456 Cedar St, Apt 17'),
(18, 'Jackson', 'Clark', '789 Oak St, Apt 18'),
(19, 'Lucas', 'Anderson', '123 Pine St, Apt 19'),
(20, 'Lily', 'Martinez', '456 Maple St, Apt 20'),
(21, 'Logan', 'Hernandez', '789 Elm St, Apt 21'),
(22, 'Emma', 'Garcia', '123 Cedar St, Apt 22'),
(23, 'Aiden', 'Rodriguez', '456 Birch St, Apt 23'),
(24, 'Ella', 'Lopez', '789 Cedar St, Apt 24'),
(25, 'Caden', 'Perez', '123 Maple St, Apt 25'),
(26, 'Aria', 'Williams', '456 Oak St, Apt 26'),
(27, 'Grayson', 'Smith', '789 Pine St, Apt 27'),
(28, 'Amelia', 'Davis', '123 Elm St, Apt 28'),
(29, 'Mason', 'Taylor', '456 Cedar St, Apt 29'),
(30, 'Harper', 'Clark', '789 Oak St, Apt 30'),
(31, 'Ethan', 'Anderson', '123 Pine St, Apt 31'),
(32, 'Charlotte', 'Martinez', '456 Maple St, Apt 32'),
(33, 'Oliver', 'Hernandez', '789 Elm St, Apt 33'),
(34, 'Isabella', 'Garcia', '123 Cedar St, Apt 34'),
(35, 'Sophie', 'Rodriguez', '456 Birch St, Apt 35'),
(36, 'Benjamin', 'Lopez', '789 Cedar St, Apt 36'),
(37, 'Aiden', 'Perez', '123 Maple St, Apt 37'),
(38, 'Evelyn', 'Williams', '456 Oak St, Apt 38'),
(39, 'Leo', 'Smith', '789 Pine St, Apt 39'),
(40, 'Avery', 'Davis', '123 Elm St, Apt 40'),
(41, 'Jack', 'Taylor', '456 Cedar St, Apt 41'),
(42, 'Madison', 'Clark', '789 Oak St, Apt 42'),
(43, 'Scarlett', 'Anderson', '123 Pine St, Apt 43'),
(44, 'Gabriel', 'Martinez', '456 Maple St, Apt 44'),
(45, 'Riley', 'Hernandez', '789 Elm St, Apt 45'),
(46, 'David', 'Garcia', '123 Cedar St, Apt 46'),
(47, 'Zoe', 'Rodriguez', '456 Birch St, Apt 47'),
(48, 'Julian', 'Lopez', '789 Cedar St, Apt 48'),
(49, 'Leah', 'Perez', '123 Maple St, Apt 49'),
(50, 'Jackson', 'Williams', '456 Oak St, Apt 50'),
(51, 'Chloe', 'Smith', '789 Pine St, Apt 51'),
(52, 'Lucy', 'Davis', '123 Elm St, Apt 52'),
(53, 'Ryan', 'Taylor', '456 Cedar St, Apt 53'),
(54, 'Ellie', 'Clark', '789 Oak St, Apt 54'),
(55, 'Nathan', 'Anderson', '123 Pine St, Apt 55');

-- select *
-- from registeredUser

INSERT INTO Booking (user_ID, flight_ID, insurance)
VALUES
(11, 1, 1),
(12, 1, 0),
(13, 2, 1),
(14, 2, 0),
(15, 3, 1),
(16, 3, 1),
(17, 4, 0),
(18, 4, 1),
(19, 5, 0),
(20, 5, 1),
(21, 1, 1),
(22, 1, 0),
(23, 2, 1),
(24, 2, 0),
(25, 3, 1),
(26, 3, 1),
(27, 4, 0),
(28, 4, 1),
(29, 5, 0),
(30, 5, 1),
(31, 1, 1),
(32, 1, 0),
(33, 2, 1),
(34, 2, 0),
(35, 3, 1),
(36, 3, 1),
(37, 4, 0),
(38, 4, 1),
(39, 5, 0),
(40, 5, 1),
(41, 1, 1),
(42, 1, 0),
(43, 2, 1),
(44, 2, 0),
(45, 3, 1),
(46, 3, 1),
(47, 4, 0),
(48, 4, 1),
(49, 5, 0),
(50, 5, 1),
(51, 1, 1),
(52, 1, 0),
(53, 2, 1),
(54, 2, 0),
(55, 3, 1);

DELETE FROM Booking WHERE flight_ID <> 1; -- Delete Booking records not related to flight_ID = 1 GOOD 

DELETE FROM registeredUser WHERE user_ID NOT IN (SELECT user_ID FROM Booking WHERE flight_ID = 1) LIMIT 1000; -- Delete registeredUser records not related to flight_ID = 1 GOOD

DELETE FROM User WHERE flight_ID <> 1; -- Delete User records not related to flight_ID = 1 GOOD

DELETE FROM Crew WHERE flight_ID <> 1; -- GOOD

-- Finally, delete records from the parent table
DELETE FROM Seat WHERE flight_ID <> 1;

DELETE FROM Flight WHERE flight_ID <> 1;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM Plane WHERE plane_ID NOT IN (SELECT plane_ID FROM Flight WHERE flight_ID = 1) AND plane_ID IS NOT NULL;
SET SQL_SAFE_UPDATES = 1;

select *
from Seat