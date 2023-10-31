import express from 'express';
import getAllUsers from '../controller/users/getAllUsers';
import getUserById from '../controller/users/getUserById';
import ProductController from '../controller/products';
import OrderController from '../controller/orders';
import AuthMiddleWare from '../middlewares';
import UserController from '../controller/users';

const routes = express.Router();

routes.get('/orders', AuthMiddleWare.authenticate, OrderController.getCurrentOrder);

routes.get('/products', ProductController.getProduct);
routes.get('/product/:id', ProductController.getProductById);
routes.post('/product', AuthMiddleWare.adminAuthenticate, ProductController.createProduct);
routes.delete('/product:id', AuthMiddleWare.adminAuthenticate, ProductController.deleteProduct);

routes.get('/user', AuthMiddleWare.adminAuthenticate, getAllUsers);
routes.get('/user/:id', AuthMiddleWare.adminAuthenticate, getUserById);
routes.post('/user/signup', UserController.createUser);
routes.post('/user/login', UserController.login);

export default routes;
