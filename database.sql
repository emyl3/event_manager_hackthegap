CREATE DATABASE event_manager;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    eventsname varchar(80),
    type varchar(20),
    date varchar(15) NOT NULL,
    time varchar(15) NOT NULL,
    location varchar(80) NOT NULL,
    contact varchar(20) NOT NULL
);

CREATE TABLE attendees (
    attendeesid SERIAL PRIMARY KEY,
    status BOOLEAN,
    name varchar(80) NOT NULL,
    events_id integer REFERENCES events
);

CREATE TABLE items (
    itemsid SERIAL PRIMARY KEY,
    events_id integer REFERENCES events,
   	itemname varchar(80)
);

CREATE TABLE attendees_items (
    events_id integer REFERENCES events,
    attendees_id integer REFERENCES attendees,
    items_id integer REFERENCES items
);
