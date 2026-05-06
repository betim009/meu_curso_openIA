import assert from 'node:assert/strict';
import test from 'node:test';
import bcrypt from 'bcryptjs';
import request from 'supertest';
import { createApp } from '../src/app.js';

function createRepository() {
  const users = [];
  let nextId = 1;

  return {
    async findUserByEmail(email) {
      return users.find((user) => user.email === email) || null;
    },
    async findUserById(id) {
      const user = users.find((item) => item.id === Number(id));
      if (!user) return null;
      const { password_hash: passwordHash, ...safeUser } = user;
      return safeUser;
    },
    async createUser({ name, email, passwordHash }) {
      const user = {
        id: nextId,
        name,
        email,
        password_hash: passwordHash,
        created_at: new Date('2026-04-30T12:00:00.000Z').toISOString()
      };
      nextId += 1;
      users.push(user);
      return user;
    }
  };
}

test('registers a user without returning password fields', async () => {
  const repository = createRepository();
  const app = createApp({ authRepository: repository, meRepository: repository });

  const response = await request(app)
    .post('/api/auth/register')
    .send({ name: 'Ada Lovelace', email: 'ada@example.com', password: 'secret123' })
    .expect(201);

  assert.equal(response.body.user.email, 'ada@example.com');
  assert.equal(response.body.user.name, 'Ada Lovelace');
  assert.equal(response.body.user.password_hash, undefined);
  assert.equal(response.body.user.password, undefined);
});

test('rejects duplicate email registration', async () => {
  const repository = createRepository();
  const app = createApp({ authRepository: repository, meRepository: repository });

  await request(app)
    .post('/api/auth/register')
    .send({ name: 'Ada Lovelace', email: 'ada@example.com', password: 'secret123' })
    .expect(201);

  await request(app)
    .post('/api/auth/register')
    .send({ name: 'Ada Lovelace', email: 'ada@example.com', password: 'secret123' })
    .expect(409);
});

test('logs in and accesses the protected profile route', async () => {
  const repository = createRepository();
  const passwordHash = await bcrypt.hash('secret123', 10);
  await repository.createUser({
    name: 'Grace Hopper',
    email: 'grace@example.com',
    passwordHash
  });

  const app = createApp({ authRepository: repository, meRepository: repository });

  const login = await request(app)
    .post('/api/auth/login')
    .send({ email: 'grace@example.com', password: 'secret123' })
    .expect(200);

  assert.ok(login.body.token);

  const me = await request(app)
    .get('/api/me')
    .set('Authorization', `Bearer ${login.body.token}`)
    .expect(200);

  assert.equal(me.body.user.email, 'grace@example.com');
});

test('blocks protected route without a token', async () => {
  const repository = createRepository();
  const app = createApp({ authRepository: repository, meRepository: repository });

  await request(app).get('/api/me').expect(401);
});
