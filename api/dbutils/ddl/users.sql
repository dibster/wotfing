CREATE TABLE users (
    id              char(10) CONSTRAINT userkey PRIMARY KEY,
    name            varchar(40) NOT NULL,
    date_created    date
);
