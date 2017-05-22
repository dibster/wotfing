CREATE TABLE pictures (
    id              char(10) CONSTRAINT picturekey PRIMARY KEY,
    name            varchar(40) NOT NULL,
    date_created    date
);
