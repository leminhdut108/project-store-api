/* Replace with your SQL commands */
CREATE TABLE products (
    name VARCHAR(255),
    price float,
    id SERIAL PRIMARY KEY
);

INSERT INTO
    products (name, price)
VALUES
    ('Iphone 15 pro max 256gb', 168);

INSERT INTO
    products (name, price)
VALUES
    ('Samsung galaxy', 220);

INSERT INTO
    products (name, price)
VALUES
    ('Huawei Mate 40', 149);

INSERT INTO
    products (name, price)
VALUES
    ('Xiaomi 13', 29.8);

INSERT INTO
    products (name, price)
VALUES
    ('Macbook Air', 189.99);