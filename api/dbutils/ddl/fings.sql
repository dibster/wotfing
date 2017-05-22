CREATE TABLE fings (
    id              char(10) CONSTRAINT fingkey PRIMARY KEY,
    name            varchar(40) NOT NULL,
    date_created    date
);
