import { QueryResult } from 'pg';
import poolDB from '../poolDb';

export type Product = {
  id?: number;
  name?: string;
  price?: number;
};

export interface ProductCategory {
  id?: number;
  name?: string;
  price?: number;
  category?: string;
}

export type UniId = string | number;

export class Products {
  async getAllProducts(): Promise<Product[]> {
    const conn = await poolDB.connect();
    const sql = 'SELECT * FROM products';
    const result = await conn.query(sql);
    conn.release();
    return result.rows;
  }

  async deleteProduct(id: UniId): Promise<Product> {
    try {
      const conn = await poolDB.connect();
      const sql = 'DELETE FROM products WHERE id=($1)';
      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not delete product ${id}. Error: ${err}`);
    }
  }

  async getById(id: UniId): Promise<Product> {
    try {
      const sql = 'SELECT * FROM products WHERE id=($1)';
      const conn = await poolDB.connect();

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find product ${id}.`);
    }
  }

  async showByCategory(category: string): Promise<ProductCategory[]> {
    try {
      const sql =
        'SELECT p.id, p.name, p.price, c.name AS category FROM products as p LEFT JOIN products_categories AS pc ON p.id = pc.product_id LEFT JOIN categories AS c ON c.id = pc.category_id WHERE c.name=($1)';
      const conn = await poolDB.connect();

      const result: QueryResult<ProductCategory> = await conn.query(sql, [
        category
      ]);

      conn.release();

      return result.rows;
    } catch (err) {
      throw new Error(`Could not find product by ${category} category`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      const sql =
        'insert into  products (name, price) VALUES($1, $2) RETURNING *';
      const conn = await poolDB.connect();
      const result = await conn.query(sql, [p.name, p.price]);
      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      console.log('error', err);
      throw new Error(`Could not add new product ${p.name}.`);
    }
  }

  async update(p: Product, id: number): Promise<Product> {
    try {
      const sql = 'UPDATE products SET name = $1, price = $2 WHERE id = $3';
      const conn = await poolDB.connect();
      const result = await conn.query(sql, [p.name, p.price, id]);
      const product = result.rows[0];

      conn.release();

      return product;
    } catch (err) {
      throw new Error(`Could not add new book ${p.name}. Error: ${err}`);
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      const sql = 'DELETE FROM product WHERE id=($1)';
      const conn = await poolDB.connect();

      const result = await conn.query(sql, [id]);

      const product = result.rows[0];
      conn.release();

      return product;
    } catch (err) {
      throw new Error(`Could not delete book ${id}. Error: ${err}`);
    }
  }
}
