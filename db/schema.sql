CREATE DATABASE bulletJournal_db;
Use bulletJournal_db;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT NOT NULL,
    user_code VARCHAR(25) NOT NULL,
    pass_code VARCHAR(35) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE goals (
    id INT AUTO_INCREMENT NOT NULL,
    user_code VARCHAR(25) NOT NULL,
    FOREIGN KEY (user_code) REFERENCES users(user_code),
    goal_name VARCHAR(200) NOT NULL,
    complete BOOLEAN SET DEFAULT false,
    PRIMARY KEY(id)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT NOT NULL,
    user_code VARCHAR(25) NOT NULL,
    FOREIGN KEY (user_code) REFERENCES users(user_code),
    tasks VARCHAR(200) NOT NULL,
    task_frequency VARCHAR(15),
    complete BOOLEAN SET DEFAULT false,
);