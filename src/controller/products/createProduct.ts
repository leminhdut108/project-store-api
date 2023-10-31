import express, { Request, Response } from 'express';
import { Product, Products } from '../../database/models/products.model';
import { productValidate } from '../../helpers/validations/productBodyValidate';
import getErrorMessage from '../../helpers/validations/getErrorMessage';

const createProduct = async (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  let parameters: Product;
  try {
    parameters = await productValidate.validateAsync(req.body, {
      abortEarly: false
    });
  } catch (err: any) {
    return res.status(400).send({ errorMessage: getErrorMessage(err) });
  }

  try {
    const newProduct: Product = {
      name: parameters.name,
      price: parameters.price
    };

    const product = new Products();
    // create item product
    const newPro = await product.create(newProduct);
    return res.send({
      message: 'success',
      new_product: newPro
    });
  } catch (err) {
    return res.status(400).send("Can't create new product");
  }
};

export default createProduct;
