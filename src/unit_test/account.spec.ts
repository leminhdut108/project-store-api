import supertest from 'supertest';
import { User, Users } from '../database/models/users.model';
import { app } from '../app';
import { returnPassHase } from '../helpers/validations/hashCode';

const user = new Users();

const passwordNew = returnPassHase("Minh1234@");
const passwordAdmin = returnPassHase("matkhau@1234");

const decode_pass_user = '$2b$10$RQsLAbtSsM1rzwE3DQOUgu3CpuNoeYfyA0S4t9NnosE0xMhbTn5Ie';
const decode_pass_admin = '$2b$10$ruRmOatLYuYw2V2m3dqls.AP8tVlcYD2Qcqytp9abtGvKHKHOLmR.';

describe('test User Model ', () => {
  it('1 check have getUserByName method', () => {
    expect(user.getUserByName).toBeDefined();
  });

  it('2 check have create method', () => {
    expect(user.createUser).toBeDefined();
  });

  it('3 check have getAllUsers method', () => {
    expect(user.getAllUsers).toBeDefined();
  });

  it('4 check have getUserById method', () => {
    expect(user.getUserById).toBeDefined();
  });

  it('5 check index method should return a user - role user', async () => {
    const result = await user.getUserByName('Admin');
    const expectData: User = {
      user_name: 'Admin',
      first_name: 'LeMinh',
      last_name: 'Ho',
      user_role: 'admin',
      password: decode_pass_user,
      id: 1
    };

    expect(result).toEqual(expectData);
  });

  it('6 check index method should return a user - role admin', async () => {
    const result = await user.getUserByName('user');
    const expectData: User = {
      user_name: 'user',
      first_name: 'Tu',
      last_name: 'Tran',
      user_role: 'user',
      password: decode_pass_admin,
      id: 2
    };

    expect(result).toEqual(expectData);
  });

  it('7 show method should return a new user - role user', async () => {
    const body = {
      user_name: 'new_user1',
      password: passwordNew,
      first_name: 'Lee',
      last_name: 'TieuLong',
      user_role: 'user'
    };
    const result = await user.createUser(body);

    expect(result.user_name).toEqual(body.user_name);
    expect(result.first_name).toEqual(body.first_name);
    expect(result.last_name).toEqual(body.last_name);
    expect(result.user_role).toEqual(body.user_role);
  });

  it('8 login with new account - user', async () => {
    const request = supertest(app);
    const response = await request.post('/api/user/login').send({
      user_name: 'new_user1',
      password: 'Minh1234@'
    });

    expect(response.statusCode).toEqual(200);
  });

  it('9 show method should return a new user -2 role admin', async () => {
    const body = {
      user_name: 'admin_new',
      password: passwordAdmin,
      first_name: 'Ho',
      last_name: 'LeMinh',
      user_role: 'admin'
    };

    const result = await user.createUser(body);

    expect(result.user_name).toEqual(body.user_name);
    expect(result.first_name).toEqual(body.first_name);
    expect(result.last_name).toEqual(body.last_name);
    expect(result.user_role).toEqual(body.user_role);
  });

  it('10 login with new account - admin', async () => {
    const request = supertest(app);
    const response = await request.post('/api/user/login').send({
      user_name: 'admin_new',
      password: 'matkhau@1234'
    });

    expect(response.statusCode).toEqual(200);
  });

});
