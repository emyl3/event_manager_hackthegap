CREATE DATABASE event_manager;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    type varchar(20),
    date varchar(15) NOT NULL,
    time varchar(15) NOT NULL,
    location varchar(80) NOT NULL
);

CREATE TABLE attendees (
    id SERIAL PRIMARY KEY,
    name varchar(80) NOT NULL,
    events_id integer REFERENCES events
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    attendees_id integer REFERENCES attendees,
   	itemname varchar(80)
);
