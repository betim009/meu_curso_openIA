import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { initializeDatabase } from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const { PORT = 3001, FRONTEND_URL = 'http://localhost:5173' } = process.env;

const app = express();

app.use(cors({ origin: FRONTEND_URL }));
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno do servidor.' });
});

await initializeDatabase();

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
