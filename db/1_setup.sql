DROP TABLE IF EXISTS series;

CREATE TABLE series (
    id serial PRIMARY KEY,
    name VARCHAR (30) NOT NULL,
    year_released INT,
    imbd_rating DECIMAL,
    number_of_episodes INT
);