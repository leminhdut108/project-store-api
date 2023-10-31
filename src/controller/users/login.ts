import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import express, { Request, Response } from 'express';
import { User, Users } from '../../database/models/users.model';
import { loginValidate } from '../../helpers/validations/loginValidate';
import getErrorMessage from '../../helpers/validations/getErrorMessage';

const login = async (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  let parameters: User;
  try {
    parameters = await loginValidate.validateAsync(req.body, {
      abortEarly: false
    });
  } catch (err: unknown) {
    return res.status(400).send({ errorMessage: getErrorMessage(err) });
  }

  try {
    const user = new Users();
    const pepper = process.env.BCRYPT_PASSWORD;
    const data = await user.getUserByName(parameters.user_name);
    const isMatch = bcrypt.compareSync(
      parameters.password + pepper,
      data.password
    );
    const secret = process.env.TOKEN_SECRET || '';
    if (!isMatch) {
      throw new Error('Incorrect password or user name');
    }
    const token = jwt.sign({ role: data.user_role, id: data.id }, secret);
    return res.status(200).send({ token: token });
  } catch (err) {
    return res.status(400).send('Incorrect password or user name');
  }
};

export default login;
