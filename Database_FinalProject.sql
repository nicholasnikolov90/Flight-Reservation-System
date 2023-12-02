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
('JFK', 'LAX', '2023-11-22', '12:00:00', '15:30:00', 1);

-- Comfort seats
INSERT INTO Seat (flight_ID, seat_number, seat_type, availability, price)
VALUES
(1, 1, 'C', 1, 350.00),
(1, 2, 'C', 1, 350.00),
(1, 3, 'C', 1, 350.00),
(1, 4, 'C', 1, 350.00),
(1, 5, 'C', 1, 350.00),
(1, 6, 'C', 1, 350.00),
(1, 7, 'C', 1, 350.00),
(1, 8, 'C', 1, 350.00),
(1, 9, 'C', 1, 350.00),
(1, 10, 'C', 1, 350.00),
(1, 11, 'C', 1, 350.00),
(1, 12, 'C', 1, 350.00);

-- Business seats
INSERT INTO Seat (flight_ID, seat_number, seat_type, availability, price)
VALUES
(1, 13, 'B', 1, 500.00),
(1, 14, 'B', 1, 500.00),
(1, 15, 'B', 1, 500.00),
(1, 16, 'B', 1, 500.00),
(1, 17, 'B', 1, 500.00),
(1, 18, 'B', 1, 500.00),
(1, 19, 'B', 1, 500.00),
(1, 20, 'B', 1, 500.00),
(1, 21, 'B', 1, 500.00),
(1, 22, 'B', 1, 500.00),
(1, 23, 'B', 1, 500.00),
(1, 24, 'B', 1, 500.00);

-- Ordinary seats
INSERT INTO Seat (flight_ID, seat_number, seat_type, availability, price)
VALUES
(1, 25, 'O', 1, 250.00),
(1, 26, 'O', 1, 250.00),
(1, 27, 'O', 1, 250.00),
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

-- Comfort seats users
INSERT INTO User (seat_ID, flight_ID)
VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1);

-- Business seats users
INSERT INTO User (seat_ID, flight_ID)
VALUES
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1);

-- Ordinary seats users
INSERT INTO User (seat_ID, flight_ID)
VALUES
(25, 1),
(26, 1),
(27, 1),
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

-- Comfort seats registered users
INSERT INTO registeredUser (user_ID, first_name, last_name, address, user_name, pass_word)
VALUES
(1, 'John', 'Doe', '123 Comfort St', 'john_doe', 'password1'),
(2, 'Jane', 'Smith', '456 Comfort St', 'jane_smith', 'password2'),
(3, 'User', '3', '789 Comfort St', 'user3', 'password3'),
(4, 'User', '4', '101 Comfort St', 'user4', 'password4'),
(5, 'User', '5', '202 Comfort St', 'user5', 'password5'),
(6, 'User', '6', '303 Comfort St', 'user6', 'password6'),
(7, 'User', '7', '404 Comfort St', 'user7', 'password7'),
(8, 'User', '8', '505 Comfort St', 'user8', 'password8'),
(9, 'User', '9', '606 Comfort St', 'user9', 'password9'),
(10, 'User', '10', '707 Comfort St', 'user10', 'password10'),
(11, 'User', '11', '808 Comfort St', 'user11', 'password11'),
(12, 'User', '12', '909 Comfort St', 'user12', 'password12');

-- Business seats registered users
INSERT INTO registeredUser (user_ID, first_name, last_name, address, user_name, pass_word)
VALUES
(13, 'Business', 'User1', '123 Business St', 'business_user1', 'password13'),
(14, 'Business', 'User2', '456 Business St', 'business_user2', 'password14'),
(15, 'Business', 'User3', '789 Business St', 'business_user3', 'password15'),
(16, 'Business', 'User4', '101 Business St', 'business_user4', 'password16'),
(17, 'Business', 'User5', '202 Business St', 'business_user5', 'password17'),
(18, 'Business', 'User6', '303 Business St', 'business_user6', 'password18'),
(19, 'Business', 'User7', '404 Business St', 'business_user7', 'password19'),
(20, 'Business', 'User8', '505 Business St', 'business_user8', 'password20'),
(21, 'Business', 'User9', '606 Business St', 'business_user9', 'password21'),
(22, 'Business', 'User10', '707 Business St', 'business_user10', 'password22'),
(23, 'Business', 'User11', '808 Business St', 'business_user11', 'password23'),
(24, 'Business', 'User12', '909 Business St', 'business_user12', 'password24');

-- Ordinary seats registered users
INSERT INTO registeredUser (user_ID, first_name, last_name, address, user_name, pass_word)
VALUES
(25, 'Ordinary', 'User1', '123 Ordinary St', 'ordinary_user1', 'password25'),
(26, 'Ordinary', 'User2', '456 Ordinary St', 'ordinary_user2', 'password26'),
(27, 'Ordinary', 'User3', '789 Ordinary St', 'ordinary_user3', 'password27'),
(28, 'Ordinary', 'User4', '101 Ordinary St', 'ordinary_user4', 'password28'),
(29, 'Ordinary', 'User5', '202 Ordinary St', 'ordinary_user5', 'password29'),
(30, 'Ordinary', 'User6', '303 Ordinary St', 'ordinary_user6', 'password30'),
(31, 'Ordinary', 'User7', '404 Ordinary St', 'ordinary_user7', 'password31'),
(32, 'Ordinary', 'User8', '505 Ordinary St', 'ordinary_user8', 'password32'),
(33, 'Ordinary', 'User9', '606 Ordinary St', 'ordinary_user9', 'password33'),
(34, 'Ordinary', 'User10', '707 Ordinary St', 'ordinary_user10', 'password34'),
(35, 'Ordinary', 'User11', '808 Ordinary St', 'ordinary_user11', 'password35'),
(36, 'Ordinary', 'User12', '909 Ordinary St', 'ordinary_user12', 'password36'),
(37, 'Ordinary', 'User13', '111 Ordinary St', 'ordinary_user13', 'password37'),
(38, 'Ordinary', 'User14', '222 Ordinary St', 'ordinary_user14', 'password38'),
(39, 'Ordinary', 'User15', '333 Ordinary St', 'ordinary_user15', 'password39'),
(40, 'Ordinary', 'User16', '444 Ordinary St', 'ordinary_user16', 'password40'),
(41, 'Ordinary', 'User17', '555 Ordinary St', 'ordinary_user17', 'password41'),
(42, 'Ordinary', 'User18', '666 Ordinary St', 'ordinary_user18', 'password42'),
(43, 'Ordinary', 'User19', '777 Ordinary St', 'ordinary_user19', 'password43'),
(44, 'Ordinary', 'User20', '888 Ordinary St', 'ordinary_user20', 'password44'),
(45, 'Ordinary', 'User21', '999 Ordinary St', 'ordinary_user21', 'password45'),
(46, 'Ordinary', 'User22', '000 Ordinary St', 'ordinary_user22', 'password46'),
(47, 'Ordinary', 'User23', '1234 Ordinary St', 'ordinary_user23', 'password47'),
(48, 'Ordinary', 'User24', '5678 Ordinary St', 'ordinary_user24', 'password48');

-- Crew for flight_ID = 1
INSERT INTO Crew (first_name, last_name, flight_ID)
VALUES
('Captain', 'Smith', 1),
('Co-Pilot', 'Johnson', 1),
('Flight Attendant', 'Anderson', 1),
('Flight Attendant', 'Williams', 1),
('Flight Attendant', 'Jones', 1);

-- Booking entries for flight_ID = 1
INSERT INTO Booking (user_ID, flight_ID, insurance)
VALUES
(1, 1, 1),
(2, 1, 0),
(3, 1, 1),
(4, 1, 0),
(5, 1, 1),
(6, 1, 0),
(7, 1, 1),
(8, 1, 0),
(9, 1, 1),
(10, 1, 0),
(11, 1, 1),
(12, 1, 0),
(13, 1, 1),
(14, 1, 0),
(15, 1, 1),
(16, 1, 0),
(17, 1, 1),
(18, 1, 0),
(19, 1, 1),
(20, 1, 0),
(21, 1, 1),
(22, 1, 0),
(23, 1, 1),
(24, 1, 0),
(25, 1, 1),
(26, 1, 0),
(27, 1, 1),
(28, 1, 0),
(29, 1, 1),
(30, 1, 0),
(31, 1, 1),
(32, 1, 0),
(33, 1, 1),
(34, 1, 0),
(35, 1, 1),
(36, 1, 0),
(37, 1, 1),
(38, 1, 0),
(39, 1, 1),
(40, 1, 0),
(41, 1, 1),
(42, 1, 0),
(43, 1, 1),
(44, 1, 0),
(45, 1, 1),
(46, 1, 0),
(47, 1, 1),
(48, 1, 0);


