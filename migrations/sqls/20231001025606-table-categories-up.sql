/* Replace with your SQL commands */
CREATE TABLE categories (
    name VARCHAR(50),
    description VARCHAR(255),
    id SERIAL PRIMARY KEY
);

INSERT INTO
    categories (name, description)
VALUES
    ('Car', 'This is Car');

INSERT INTO
    categories (name, description)
VALUES
    ('Laptop', 'Laptop Categories');

INSERT INTO
    categories (name, description)
VALUES
    ('Phone', 'This is Smart phone');

INSERT INTO
    categories (name, description)
VALUES
    ('Smart watch', 'This is Smart watch');