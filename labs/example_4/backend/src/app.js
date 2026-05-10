import cors from 'cors';
import express from 'express';
import { config } from './config.js';
import { authRouter } from './routes/auth.js';
import { meRouter } from './routes/me.js';

export function createApp({ authRepository, meRepository } = {}) {
  const app = express();

  app.use(cors({ origin: config.corsOrigin }));
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/api/auth', authRouter(authRepository));
  app.use('/api/me', meRouter(meRepository));

  app.use((req, res) => {
    res.status(404).json({ message: 'Rota não encontrada.' });
  });

  app.use((error, req, res, next) => {
    if (error && error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email já cadastrado.' });
    }

    return res.status(500).json({ message: 'Erro interno do servidor.' });
  });

  return app;
}
