CREATE TABLE places (
    id              char(10) CONSTRAINT placekey PRIMARY KEY,
    name            varchar(40) NOT NULL,
    date_created    date
);
