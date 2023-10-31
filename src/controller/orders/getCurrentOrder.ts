import express, { Request, Response } from 'express';
import { Orders } from '../../database/models/orders.model';
import jwt from 'jsonwebtoken';

const getCurrentOrder = async (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  try {
    const mOrders = new Orders();
    const accessToken = req.headers.authorization || '';
    const token = accessToken && accessToken.split('Bearer ')[1];
    const secret = process.env.TOKEN_SECRET || '';
    const payload: any = jwt.verify(token, secret);
    const data = await mOrders.getOderById(payload?.id);
    return res.send(data);
  } catch (err) {
    return res.status(400).send({ errorMessage: `Could not find order .` });
  }
};

export default getCurrentOrder;
