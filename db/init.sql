CREATE TABLE IF NOT EXISTS USER(
       id INT NOT NULL AUTO_INCREMENT KEY,
       firstname VARCHAR(255) NOT NULL,
       lastname VARCHAR(255) NOT NULL,
       age INT NOT NULL,
       phone VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       password VARCHAR(255) NOT NULL,
       admin TINYINT(1) NOT NULL DEFAULT 0,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO USER(firstname, lastname, age, phone, email, password, admin) VALUES  
  ('Audrey','Admin',43,"06 12 34 56 78","admin@switchabout.com","admin",1),
  ("Mark","Montoya",23,"05 66 58 36 44","facilisi.sed@icloud.edu","FAY86HOM6EE",0),
  ("Harriet","Barron",42,"08 24 29 40 58","semper.tellus@protonmail.edu","KHR42PJF5YC",0),
  ("Elmo","Thomas",28,"03 58 50 26 19","malesuada.fringilla.est@google.ca","RUY15ETF0XD",0),
  ("Elizabeth","Todd",20,"08 21 82 70 42","ut@outlook.net","PRO48GZR9QH",1),
  ("Ryder","Gilbert",31,"02 84 46 20 08","enim.suspendisse@yahoo.net","MCV41UDH6ZQ", 0),
  ("Gwendolyn","Moran",50,"01 98 99 61 34","ac.risus@protonmail.net","BGI62FGT2EN",1),
  ("Neve","Mueller",22,"03 88 34 62 16","diam.at@aol.ca","VXO77KTC6RC",0),
  ("Mark","Baldwin",19,"07 34 71 15 12","at.auctor@yahoo.net","YZB56NKY5LU",0),
  ("Zane","Roberson",29,"04 41 98 51 11","risus.at.fringilla@google.edu","ORT21QOT1HH",1),
  ("Oleg","Walters",33,"04 71 14 83 89","dapibus.rutrum.justo@google.org","MGQ82GVN9ET",0);

CREATE TABLE IF NOT EXISTS FORMATION(
       id INT NOT NULL AUTO_INCREMENT KEY,
       name VARCHAR(255) NOT NULL,
       description LONGTEXT NOT NULL,
       cpf TINYINT(1) NOT NULL DEFAULT 0,
       online TINYINT(1) NOT NULL DEFAULT 0,
       duration INT NOT NULL,
       unit VARCHAR(255) NOT NULL,
       level VARCHAR(255) NOT NULL,
       degree LONGTEXT NOT NULL,
       category VARCHAR(255) NOT NULL,
       subcategory VARCHAR(255),
       organism VARCHAR(255) NOT NULL,
       cities VARCHAR(255),
       price INT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS PROFIL(
       id INT NOT NULL AUTO_INCREMENT KEY,
       form_id INT NOT NULL,
       firstname VARCHAR(255) NOT NULL,
       lastname VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       age INT NOT NULL,
       phone VARCHAR(255) NOT NULL,
       degree VARCHAR(255) NOT NULL,
       category VARCHAR(255) NOT NULL,
       subcategory VARCHAR(255),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS ADVICE(
       profil INT NOT NULL,
       formation INT NOT NULL,
       PRIMARY KEY(profil, formation),
       CONSTRAINT fk_profil_advice 
              FOREIGN KEY (profil) REFERENCES PROFIL(id) 
              ON DELETE CASCADE ON UPDATE CASCADE,
       CONSTRAINT fk_formation_advice
              FOREIGN KEY (formation) REFERENCES FORMATION(id) 
              ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;


ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;