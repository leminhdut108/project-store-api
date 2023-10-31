import Joi from 'joi';
import { User } from '../../database/models/users.model';

export const signupValidate = Joi.object<User>({
  user_name: Joi.string().required().max(255),
  first_name: Joi.string().required().max(255),
  last_name: Joi.string().required().max(255),
  password: Joi.string().required()
});
