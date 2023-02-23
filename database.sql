create TABLE author(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    surname VARCHAR(255)
)

create TABLE movie(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES author (id)
)