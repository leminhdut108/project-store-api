import poolDB from '../poolDb';

export type Order = {
  id?: number;
  user_id?: number;
  product_id?: number;
  quantity?: number;
  order_status?: string;
};

export interface OrderDetail {
  id?: number;
  user_id?: string;
  user_name?: string;
  product_id?: string;
  name?: string;
  price?: number;
  quantity?: number;
  order_status?: string;
  noted?: string;
}

export class Orders {
  public async getOderById(id: number): Promise<OrderDetail[]> {
    try {
      const query = 'SELECT * FROM orders AS o WHERE o.id = $1';
      const conn = await poolDB.connect();
      const result = await conn.query(query, [id]);

      conn.release();
      return result.rows;
    } catch (err) {
      console.log(err);
      throw new Error("can't get order");
    }
  }

  public async create(newOrder: Order): Promise<Order> {
    try {
      const sql =
        'insert into orders (user_id, product_id, quantity) VALUES($1, $2, $3) RETURNING *';
      const conn = await poolDB.connect();
      const result = await conn.query(sql, [newOrder.user_id, newOrder.product_id, newOrder.quantity]);
      const oder = result.rows[0];

      conn.release();

      return oder;
    } catch (err) {
      console.log('error', err);
      throw new Error(`Could not add new product`);
    }
  }
}
