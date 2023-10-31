import bcrypt from 'bcrypt';
import express, { Request, Response } from 'express';
import { User, Users } from '../../database/models/users.model';
import { signupValidate } from '../../helpers/validations/signupValdate';
import getErrorMessage from '../../helpers/validations/getErrorMessage';

const createUser = async (
  req: Request,
  res: Response,
  next: express.NextFunction
) => {
  let parameters: User;
  try {
    parameters = await signupValidate.validateAsync(req.body, {
      abortEarly: false
    });
  } catch (err: unknown) {
    return res.status(400).send({ errorMessage: getErrorMessage(err) });
  }

  try {
    const user = new Users();
    const pepper = process.env.BCRYPT_PASSWORD;
    const saltRound: number = process.env.SALT_ROUND
      ? parseInt(process.env.SALT_ROUND)
      : 0;
    const hash = bcrypt.hashSync(parameters.password + pepper, saltRound);

    const newUser: User = {
      user_name: parameters.user_name,
      first_name: parameters.first_name,
      last_name: parameters.last_name,
      password: hash,
      user_role: parameters.user_role
    };
    const data = await user.createUser(newUser);
    return res.send(data);
  } catch (err) {
    return res.status(400).send("Can't create new user, user_name, first_name, last_name, password are required! user_name is not duplicate! ");
  }
};

export default createUser;
