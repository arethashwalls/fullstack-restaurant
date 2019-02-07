CREATE DATABASE IF NOT EXISTS fullstack_db;
USE fullstack_db;

CREATE TABLE pancakes (
    id INT NOT NULL AUTO_INCREMENT,
    pancake_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);