import poolDB from '../poolDb';

export type User = {
  id?: number;
  user_name?: string;
  first_name?: string;
  last_name?: string;
  password: string;
  user_role?: string;
};

export class Users {
  async createUser(user: User): Promise<User> {
    try {
      const conn = await poolDB.connect();
      const sql =
        'INSERT INTO users (user_name, first_name, last_name, password, user_role) VALUES($1, $2, $3, $4, $5) RETURNING *';
      const data = await conn.query(sql, [
        user.user_name,
        user.first_name,
        user.last_name,
        user.password,
        user.user_role,
      ]);
      const result = data.rows[0];
      conn.release();
      return result;
    } catch (err) {
      console.log('create user error: ', err);
      throw Error(`Could not add new user ${user.user_name}`);
    }
  }

  async getUserByName(userName?: string): Promise<User> {
    try {
      const conn = await poolDB.connect();
      const sql = `SELECT * FROM users WHERE user_name = ($1)`;
      const data = await conn.query(sql, [userName]);
      const result: User = data.rows[0];
      return result;
    } catch (err) {
      console.log(err);
      throw new Error(`User name or password incorrect.`);
    }
  }

  async getAllUsers(): Promise<Array<User>> {
    try {
      const conn = await poolDB.connect();
      const sql = `SELECT id, user_name, first_name, last_name, user_role FROM users`;
      const data = await conn.query(sql);
      const result: Array<User> = data.rows;
      return result;
    } catch (err) {
      console.log(err);
      throw new Error(`Could not get all users.`);
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const conn = await poolDB.connect();
      const sql = `SELECT id, user_name, first_name, last_name, user_role FROM users WHERE id = ($1)`;
      const data = await conn.query(sql, [id]);
      const result: User = data.rows[0];
      return result;
    } catch (err) {
      console.log(err);
      throw new Error(`Could not get all users.`);
    }
  }
}
