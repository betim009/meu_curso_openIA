import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../config/database.js';
import { requireAuth } from '../middleware/auth.js';

const router = Router();
const { JWT_SECRET = 'change-me-in-production', JWT_EXPIRES_IN = '1d' } = process.env;

function sanitizeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
}

function createToken(user) {
  return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

function validateCredentials({ name, email, password }, requireName = true) {
  if (requireName && (!name || name.trim().length < 2)) {
    return 'Nome deve ter pelo menos 2 caracteres.';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Email invalido.';
  }

  if (!password || password.length < 6) {
    return 'Senha deve ter pelo menos 6 caracteres.';
  }

  return null;
}

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const validationError = validateCredentials({ name, email, password });

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password_hash) VALUES (:name, :email, :passwordHash)',
      { name: name.trim(), email: email.trim().toLowerCase(), passwordHash },
    );

    const [rows] = await pool.execute('SELECT * FROM users WHERE id = :id', {
      id: result.insertId,
    });
    const user = rows[0];

    return res.status(201).json({
      token: createToken(user),
      user: sanitizeUser(user),
    });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email ja cadastrado.' });
    }

    return res.status(500).json({ message: 'Erro ao registrar usuario.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const validationError = validateCredentials({ email, password }, false);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const [rows] = await pool.execute('SELECT * FROM users WHERE email = :email', {
    email: email.trim().toLowerCase(),
  });
  const user = rows[0];

  if (!user || !(await bcrypt.compare(password, user.password_hash))) {
    return res.status(401).json({ message: 'Email ou senha invalidos.' });
  }

  return res.json({
    token: createToken(user),
    user: sanitizeUser(user),
  });
});

router.get('/me', requireAuth, async (req, res) => {
  const [rows] = await pool.execute('SELECT * FROM users WHERE id = :id', {
    id: req.user.id,
  });
  const user = rows[0];

  if (!user) {
    return res.status(404).json({ message: 'Usuario nao encontrado.' });
  }

  return res.json({ user: sanitizeUser(user) });
});

export { sanitizeUser, validateCredentials };
export default router;
