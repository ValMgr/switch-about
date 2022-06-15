CREATE TABLE IF NOT EXISTS USERS(
       id INT NOT NULL AUTO_INCREMENT KEY,
       firstname VARCHAR(255) NOT NULL,
       lastname VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       age INT NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO USERS(firstname, lastname, email, age, password) VALUES('John', 'Doe', 'user1@switchabout.com', '25', 'password');
INSERT INTO USERS(firstname, lastname, email, age, password) VALUES('Michael', 'Jackson', 'user2@switchabout.com', '32', 'password');
INSERT INTO USERS(firstname, lastname, email, age, password) VALUES('Olivier', 'Giroud', 'user3@switchabout.com', '18', 'password');
INSERT INTO USERS(firstname, lastname, email, age, password) VALUES('Sarah', 'Connor', 'user4@switchabout.com', '40', 'password');
INSERT INTO USERS(firstname, lastname, email, age, password) VALUES('Lisa', 'Simpson', 'user5@switchabout.com', '36', 'password');
INSERT INTO USERS(firstname, lastname, email, age, password) VALUES('Marie', 'Curie', 'user6@switchabout.com', '53', 'password');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;