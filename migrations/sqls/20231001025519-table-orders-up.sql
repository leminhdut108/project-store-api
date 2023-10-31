/* Replace with your SQL commands */
CREATE TABLE orders (
    user_id bigint REFERENCES users(id),
    order_status VARCHAR(50),
    noted VARCHAR(50),
    id SERIAL PRIMARY KEY
);

INSERT INTO
    orders (user_id, noted, order_status)
VALUES
    (1, 'complete', 'ok');

INSERT INTO
    orders (user_id, noted, order_status)
VALUES
    (2, 'complete', 'ok');

INSERT INTO
    orders (user_id, noted, order_status)
VALUES
    (2, 'active', 'ok');

INSERT INTO
    orders (user_id, noted, order_status)
VALUES
    (3, 'pending', 'waiting');

INSERT INTO
    orders (user_id, noted, order_status)
VALUES
    (3, 'canceled', 'cancel by customer');