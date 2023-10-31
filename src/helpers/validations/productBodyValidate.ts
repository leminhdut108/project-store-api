import Joi from 'joi';
import { Product } from '../../database/models/products.model';

export const productValidate = Joi.object<Product>({
  name: Joi.string().required().max(255),
  price: Joi.number().required()
});
