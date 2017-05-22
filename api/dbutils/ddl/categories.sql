CREATE TABLE categories (
    id              char(10) CONSTRAINT categorykey PRIMARY KEY,
    name            varchar(40) NOT NULL,
    date_created    date
);
