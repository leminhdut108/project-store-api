import express from 'express';
import jwt from 'jsonwebtoken';

const authenticate = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const authorizationHeader = req.headers.authorization || '';
    const token = authorizationHeader && authorizationHeader.split(' ')[1];
    const secret = process.env.TOKEN_SECRET || '';
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(401).json(`Invalid token ${error}`);
    return;
  }
};

export default authenticate;
