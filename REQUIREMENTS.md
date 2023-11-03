# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 


## Data Shapes
#### Product
-  id SERIAL PRIMARY KEY
- name VARCHAR
- price FLOAT

#### users
    user_name VARCHAR(50) UNIQUE,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    user_role VARCHAR(50),
    password VARCHAR(255),
    id SERIAL PRIMARY KEY

#### products
    name VARCHAR(255),
    price float,
    id SERIAL PRIMARY KEY

#### orders
    user_id bigint REFERENCES users(id),
    order_status VARCHAR(50),
    noted VARCHAR(50),
    id SERIAL PRIMARY KEY

#### orders_products
    order_id bigint REFERENCES orders(id),
    product_id bigint REFERENCES products(id),
    quantity INTEGER,
    noted VARCHAR(50),
    id SERIAL PRIMARY KEY

#### categories
    name VARCHAR(50),
    description VARCHAR(255),
    id SERIAL PRIMARY KEY

#### products_categories
    category_id bigint REFERENCES categories(id),
    product_id bigint REFERENCES products(id), 
    quantity INTEGER, 
    status VARCHAR(50), 
    id SERIAL PRIMARY KEY
