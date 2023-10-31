import express from 'express';
import jwt from 'jsonwebtoken';

const adminAuthenticate = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const authorizationHeader = req.headers.authorization || '';
    const token = authorizationHeader && authorizationHeader.split(' ')[1];
    const secret = process.env.TOKEN_SECRET || '';
    const data: any = jwt.verify(token, secret);
    if (data.role !== 'admin') {
      return res
        .status(401).json({ errorMessage: 'Your permission is denied' });
    }
    next();
  } catch (err: unknown) {
    return res.status(401).json(`Invalid token ${err}`);
  }
};

export default adminAuthenticate;
