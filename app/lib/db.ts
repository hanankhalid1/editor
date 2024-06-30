import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'editor',
  password: '123',
  port: 5001,
});

export default pool;