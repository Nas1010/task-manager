import pg from 'pg';  
import dotenv from 'dotenv'; 

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});


const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected:', res.rows[0]);
  } catch (err) {
    console.error('Connection details:', {
      host: new URL(process.env.DATABASE_URL).hostname,
      database: new URL(process.env.DATABASE_URL).pathname.slice(1)
    });
    console.error('Database connection error:', err);
  }
};

testConnection();

export default pool;