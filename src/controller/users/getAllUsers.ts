import express, { Request, Response } from 'express';
import { Users } from '../../database/models/users.model';

const getAllUsers = async (
  _req: Request,
  res: Response,
  next: express.NextFunction
) => {
  const user = new Users();
  const data = await user.getAllUsers();
  return res.send(data);
};

export default getAllUsers;
