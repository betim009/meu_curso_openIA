import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogIn, FiUserPlus } from 'react-icons/fi';
import api from '../services/api.js';

export default function AuthPage({ mode }) {
  const isRegister = mode === 'register';
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login';
      const payload = isRegister
        ? form
        : { email: form.email, password: form.password };
      const { data } = await api.post(endpoint, payload);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Nao foi possivel concluir a operacao.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-panel">
        <div>
          <h1>{isRegister ? 'Criar conta' : 'Entrar'}</h1>
          <p>Gerencie cadastros de usuarios com autenticacao JWT.</p>
        </div>

        <form onSubmit={handleSubmit} className="stack">
          {isRegister && (
            <label className="form-label">
              Nome
              <input
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange}
                minLength="2"
                required
              />
            </label>
          )}

          <label className="form-label">
            Email
            <input
              className="form-control"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="form-label">
            Senha
            <input
              className="form-control"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </label>

          {message && <div className="alert alert-danger">{message}</div>}

          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isRegister ? <FiUserPlus /> : <FiLogIn />}
            {isSubmitting ? 'Enviando...' : isRegister ? 'Registrar' : 'Entrar'}
          </button>
        </form>

        <Link to={isRegister ? '/login' : '/register'}>
          {isRegister ? 'Ja tenho conta' : 'Criar uma nova conta'}
        </Link>
      </section>
    </main>
  );
}
