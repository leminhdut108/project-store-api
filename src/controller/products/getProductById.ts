import express, { Request, Response } from 'express';
import { Products } from '../../database/models/products.model';

const getProductById = async (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  try {
    const products = new Products();
    const data = await products.getById(req.params.id);
    return res.send(data);
  } catch (err) {
    return res
      .status(400)
      .send({ errorMessage: `Could not find product ${req.params.id}.` });
  }
};

export default getProductById;
