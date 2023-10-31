/* Replace with your SQL commands */
CREATE TABLE products_categories (category_id bigint REFERENCES categories(id), product_id bigint REFERENCES products(id), quantity INTEGER, status VARCHAR(50), id SERIAL PRIMARY KEY);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (1, 1, 12);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (3, 2, 299);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (3, 2, 99);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (4, 3, 100);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (2, 4, 231);
INSERT INTO products_categories (category_id, product_id, quantity) VALUES (2, 5, 100);