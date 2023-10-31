import express, { Request, Response } from 'express';
import { Products } from '../../database/models/products.model';

const getProduct = async (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  const products = new Products();
  if (req.query.category) {
    const data = await products.showByCategory(req.query.category.toString());
    data.map((item) => console.log(item.category));
    return res.send(data);
  }

  const data = await products.getAllProducts();
  return res.send(data);
};

export default getProduct;
