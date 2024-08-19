CREATE TABLE User (
    user_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL
);

CREATE TABLE Event (
    event_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    location TEXT NOT NULL,
    date DATE NOT NULL
);

CREATE TABLE Volunteer_Opportunity (
    opportunity_id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    location TEXT NOT NULL
);

CREATE TABLE Donation (
    donation_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    amount REAL NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Program (
    program_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE Application (
    application_id INTEGER PRIMARY KEY,
    user_id INTEGER,
    program_id INTEGER,
    status TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (program_id) REFERENCES Program(program_id)
);
