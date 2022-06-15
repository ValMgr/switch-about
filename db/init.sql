CREATE TABLE IF NOT EXISTS FORMATION(
       id INT NOT NULL AUTO_INCREMENT KEY,
       name VARCHAR(255) NOT NULL,
       category VARCHAR(255) NOT NULL,
       hour INT NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

INSERT INTO FORMATION(name, category, hour) VALUES('Formation 1',  'Informatique', '10');
INSERT INTO FORMATION(name, category, hour) VALUES('Formation 2',  'Communication', '12');
INSERT INTO FORMATION(name, category, hour) VALUES('Formation 3',  'Vente', '58');
INSERT INTO FORMATION(name, category, hour) VALUES('Formation 4',  'Graphisme', '31');

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;