CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    Burger_name VARCHAR(30),
    Devoured BOOLEAN
);