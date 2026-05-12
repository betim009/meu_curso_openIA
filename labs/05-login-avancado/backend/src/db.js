import mysql from 'mysql2/promise';
import { config } from './config.js';

let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool(config.db);
  }

  return pool;
}

export async function waitForDatabase(retries = 30, delayMs = 1000) {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const connection = await getPool().getConnection();
      connection.release();
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError;
}

export async function findUserByEmail(email) {
  const [rows] = await getPool().execute(
    'SELECT id, name, email, password_hash, created_at FROM users WHERE email = ? LIMIT 1',
    [email]
  );

  return rows[0] || null;
}

export async function findUserById(id) {
  const [rows] = await getPool().execute(
    'SELECT id, name, email, created_at FROM users WHERE id = ? LIMIT 1',
    [id]
  );

  return rows[0] || null;
}

export async function createUser({ name, email, passwordHash }) {
  const [result] = await getPool().execute(
    'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
    [name, email, passwordHash]
  );

  return findUserById(result.insertId);
}
