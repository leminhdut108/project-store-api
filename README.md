# MinhHL2-Project-REST-API

Refer to the source code on the internet, rewrote it in my own understand

# Storefront Backend

## Introduction

A JavaScript API based on a requirements given by the stakeholders. The application provides APIs for managing orders, products, and users.

## Requirements environment

- Node.js
- Docker desktop
- Docker Compose

## Installation

1. Install node modules

- npm install

2. Run the PostgreSQL database:

- docker-compose up

3. Create the database tables:

- db-migrate up

## start app

Run the following command to start the application:

- npm run dev

Run unit test

- npm run test

The application will run on http://localhost:3000/api

## Routes

Please read file Json Post man and import to post man

project_rest.postman_collection.json

- POST /user/signup: Sign up a new user account:
  Noted: This api can't not call many time, because user_name is can't not duplicate

- POST /user/login: Log in with a user account

- GET /products: Get a list of products
- GET /product?category=xxx: Get a list of products by category
- GET /product/:id: Get detailed information about a product by ID

- POST /product: Create a new product:
  Noted: need to adminAuthenticate
- DELETE /product/:id: Delete a product
  Noted: need to adminAuthenticate

- GET /orders: Get a list of orders:
- GET /user: Get all users
  Noted: need to adminAuthenticate
- GET /user/:id: Get user by id
  Noted: need to adminAuthenticate

Todo: (Limit time) - API create oder - Delete user - Delete product / edit product

## Default Accounts

- Admin Account:
  - Username: Admin
  - Password: matkhau@1234

- User Account:
  - Username: user
  - Password: Minh1234@
