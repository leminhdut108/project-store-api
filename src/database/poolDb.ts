import { Pool } from 'pg';
import 'dotenv/config';

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_TEST_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  ENV
} = process.env;

console.log('is dev env: ', ENV === 'dev');

let poolDB: Pool = new Pool({
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  database: POSTGRES_TEST_DB,
  password: POSTGRES_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

if (ENV === 'dev') {
  poolDB = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    database: POSTGRES_DB,
    password: 'example',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
  });
}

export default poolDB;