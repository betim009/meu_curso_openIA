import { Router } from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../config/database.js';
import { requireAuth } from '../middleware/auth.js';
import { sanitizeUser } from './authRoutes.js';

const router = Router();

function validateUserPayload({ name, email, password }, isUpdate = false) {
  if (!isUpdate || name !== undefined) {
    if (!name || name.trim().length < 2) {
      return 'Nome deve ter pelo menos 2 caracteres.';
    }
  }

  if (!isUpdate || email !== undefined) {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Email invalido.';
    }
  }

  if (password !== undefined && password.length > 0 && password.length < 6) {
    return 'Senha deve ter pelo menos 6 caracteres.';
  }

  if (!isUpdate && (!password || password.length < 6)) {
    return 'Senha deve ter pelo menos 6 caracteres.';
  }

  return null;
}

router.use(requireAuth);

router.get('/', async (_req, res) => {
  const [rows] = await pool.execute(
    'SELECT id, name, email, created_at, updated_at FROM users ORDER BY id DESC',
  );
  return res.json({ users: rows });
});

router.get('/:id', async (req, res) => {
  const [rows] = await pool.execute(
    'SELECT id, name, email, created_at, updated_at FROM users WHERE id = :id',
    { id: req.params.id },
  );

  if (!rows[0]) {
    return res.status(404).json({ message: 'Usuario nao encontrado.' });
  }

  return res.json({ user: rows[0] });
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const validationError = validateUserPayload({ name, email, password });

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

    return res.status(201).json({ user: sanitizeUser(rows[0]) });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email ja cadastrado.' });
    }

    return res.status(500).json({ message: 'Erro ao criar usuario.' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const validationError = validateUserPayload({ name, email, password }, true);

  if (validationError) {
    return res.status(400).json({ message: validationError });
  }

  const [existingRows] = await pool.execute('SELECT * FROM users WHERE id = :id', {
    id: req.params.id,
  });

  if (!existingRows[0]) {
    return res.status(404).json({ message: 'Usuario nao encontrado.' });
  }

  const existingUser = existingRows[0];
  const nextUser = {
    name: name === undefined ? existingUser.name : name.trim(),
    email: email === undefined ? existingUser.email : email.trim().toLowerCase(),
    passwordHash: existingUser.password_hash,
  };

  if (password) {
    nextUser.passwordHash = await bcrypt.hash(password, 10);
  }

  try {
    await pool.execute(
      `UPDATE users
       SET name = :name, email = :email, password_hash = :passwordHash
       WHERE id = :id`,
      { ...nextUser, id: req.params.id },
    );

    const [rows] = await pool.execute('SELECT * FROM users WHERE id = :id', {
      id: req.params.id,
    });

    return res.json({ user: sanitizeUser(rows[0]) });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email ja cadastrado.' });
    }

    return res.status(500).json({ message: 'Erro ao atualizar usuario.' });
  }
});

router.delete('/:id', async (req, res) => {
  const [result] = await pool.execute('DELETE FROM users WHERE id = :id', {
    id: req.params.id,
  });

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'Usuario nao encontrado.' });
  }

  return res.status(204).send();
});

export default router;
