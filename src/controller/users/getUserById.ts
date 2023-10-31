import express, { Request, Response } from 'express';
import { Users } from '../../database/models/users.model';

const getUserById = async (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  try {
    const user = new Users();
    const data = await user.getUserById(req.params.id);
    return res.send(data);
  } catch (err) {
    return res
      .status(400)
      .send({
        errorMessage: `Could not find user by query param ${req.params.id}.`
      });
  }
};

export default getUserById;
