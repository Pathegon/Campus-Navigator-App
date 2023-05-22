-- This script sets up an SQLite database for the Campus Navigator FCCU project

-- Create Users table
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Email VARCHAR(255),
    Password VARCHAR(255),
    Bio TEXT,
    DateOfBirth DATE,
    ProfilePic VARCHAR(255)
);

-- Create Locations table
CREATE TABLE Locations (
    LocationID INT PRIMARY KEY,
    LocationName VARCHAR(255),
    LocationDescription TEXT,
    NumberOfLikes INT,
    AverageRating DECIMAL(3, 2),
    PrimaryPurpose VARCHAR(255),
    AveragePricing DECIMAL(10, 2),
    AirConditioned BOOLEAN,
    DisabilityFriendly BOOLEAN,
    BuildingNumber VARCHAR(255),
    LocationImage VARCHAR(255),
    GoogleMapsLocation VARCHAR(255)
);

-- Create Reviews table
CREATE TABLE Reviews (
    ReviewID INT PRIMARY KEY,
    UserID INT,
    LocationID INT,
    ReviewText TEXT,
    StarRating INT,
    TimeAdded TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (LocationID) REFERENCES Locations(LocationID)
);

-- Create Likes table
CREATE TABLE Likes (
    UserID INT,
    LocationID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (LocationID) REFERENCES Locations(LocationID)
);

-- Create Searches table
CREATE TABLE Searches (
    SearchID INT PRIMARY KEY,
    UserID INT,
    SearchQuery VARCHAR(255),
    SearchDate TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Populate tables with dummy data
INSERT INTO Users (UserID, Email, Password, Bio, DateOfBirth, ProfilePic) VALUES (1, 'john@example.com', 'password', 'I love exploring new places.', '1990-01-01', 'profilepic.jpg');
INSERT INTO Locations (LocationID, LocationName, LocationDescription, NumberOfLikes, AverageRating, PrimaryPurpose, AveragePricing, AirConditioned, DisabilityFriendly, BuildingNumber, LocationImage, GoogleMapsLocation) VALUES (1, 'Library', 'A quiet place to study.', 100, 4.5, 'Study', 0, TRUE, TRUE, 'B1', 'library.jpg', 'https://maps.google.com/?q=Library');
INSERT INTO Reviews (ReviewID, UserID, LocationID, ReviewText, StarRating, TimeAdded) VALUES (1, 1, 1, 'Great place to study!', 5, CURRENT_TIMESTAMP);
INSERT INTO Likes (UserID, LocationID) VALUES (1, 1);
INSERT INTO Searches (SearchID, UserID, SearchQuery, SearchDate) VALUES (1, 1, 'Library', CURRENT_TIMESTAMP);
