-- DROP DATABASE IF EXISTS bulletJournal_db;
CREATE DATABASE bulletJournal_db;
Use bulletJournal_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    user_code VARCHAR(25) NOT NULL,
    pass_code VARCHAR(35) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE goals (
    id INT AUTO_INCREMENT NOT NULL,
    user_code VARCHAR(25) NOT NULL,
    goal_name VARCHAR(200) NOT NULL,
    complete BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT NOT NULL,
    user_code VARCHAR(25) NOT NULL,
    tasks VARCHAR(200) NOT NULL,
    task_frequency VARCHAR(15),
    complete BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);
