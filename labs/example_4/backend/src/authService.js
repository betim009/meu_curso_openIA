import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from './config.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.created_at || user.createdAt
  };
}

export function validateRegistration(input) {
  const name = String(input.name || '').trim();
  const email = String(input.email || '').trim().toLowerCase();
  const password = String(input.password || '');

  if (name.length < 2) {
    return { error: 'Nome deve ter pelo menos 2 caracteres.' };
  }

  if (!emailPattern.test(email)) {
    return { error: 'Email inválido.' };
  }

  if (password.length < 6) {
    return { error: 'Senha deve ter pelo menos 6 caracteres.' };
  }

  return { data: { name, email, password } };
}

export function validateLogin(input) {
  const email = String(input.email || '').trim().toLowerCase();
  const password = String(input.password || '');

  if (!emailPattern.test(email) || !password) {
    return { error: 'Email ou senha inválidos.' };
  }

  return { data: { email, password } };
}

export async function registerUser(input, repository) {
  const validation = validateRegistration(input);

  if (validation.error) {
    return { status: 400, body: { message: validation.error } };
  }

  const existingUser = await repository.findUserByEmail(validation.data.email);

  if (existingUser) {
    return { status: 409, body: { message: 'Email já cadastrado.' } };
  }

  const passwordHash = await bcrypt.hash(validation.data.password, 10);
  const user = await repository.createUser({
    name: validation.data.name,
    email: validation.data.email,
    passwordHash
  });

  return { status: 201, body: { user: sanitizeUser(user) } };
}

export async function loginUser(input, repository) {
  const validation = validateLogin(input);

  if (validation.error) {
    return { status: 400, body: { message: validation.error } };
  }

  const user = await repository.findUserByEmail(validation.data.email);

  if (!user) {
    return { status: 401, body: { message: 'Credenciais inválidas.' } };
  }

  const passwordMatches = await bcrypt.compare(validation.data.password, user.password_hash);

  if (!passwordMatches) {
    return { status: 401, body: { message: 'Credenciais inválidas.' } };
  }

  const token = jwt.sign({ sub: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn
  });

  return { status: 200, body: { token, user: sanitizeUser(user) } };
}
