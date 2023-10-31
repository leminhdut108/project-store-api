/* Replace with your SQL commands */
CREATE TABLE orders_products (
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id),
    quantity INTEGER,
    noted VARCHAR(50),
    id SERIAL PRIMARY KEY
);

INSERT INTO
    orders_products (order_id, product_id, noted, quantity)
VALUES
    (3, 1, 'noted', 1);

INSERT INTO
    orders_products (order_id, product_id, noted, quantity)
VALUES
    (1, 2, 'so luong co han', 20);

INSERT INTO
    orders_products (order_id, product_id, noted, quantity)
VALUES
    (1, 3, 'flash sale', 99);

INSERT INTO
    orders_products (order_id, product_id, noted, quantity)
VALUES
    (2, 4, 'ahihih', 120);

INSERT INTO
    orders_products (order_id, product_id, noted, quantity)
VALUES
    (2, 4, 'prodcut', 1);

INSERT INTO
    orders_products (order_id, product_id, noted, quantity)
VALUES
    (2, 5, 'ahih', 1);