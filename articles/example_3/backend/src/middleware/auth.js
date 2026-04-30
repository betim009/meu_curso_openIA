import jwt from 'jsonwebtoken';

const { JWT_SECRET = 'change-me-in-production' } = process.env;

export function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token de autenticacao ausente.' });
  }

  const token = authHeader.slice('Bearer '.length);

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    return next();
  } catch {
    return res.status(401).json({ message: 'Token de autenticacao invalido ou expirado.' });
  }
}
