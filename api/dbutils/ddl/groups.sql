CREATE TABLE groups (
    id              char(10) CONSTRAINT groupkey PRIMARY KEY,
    name            varchar(40) NOT NULL,
    date_created    date
);
