import { Lock, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { api } from '../api/client.js';
import { AuthLayout } from '../components/AuthLayout.jsx';
import { FormField } from '../components/FormField.jsx';
import { useAuth } from '../state/AuthContext.jsx';

export function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { persistSession } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const response = await api.post('/api/auth/login', form);
      persistSession(response.data.token, response.data.user);
      navigate(location.state?.from?.pathname || '/profile', { replace: true });
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Não foi possível fazer login.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthLayout title="Hello Again!" subtitle="Welcome Back">
      <form onSubmit={handleSubmit} className="auth-stack">
        {error && <div className="alert alert-danger">{error}</div>}
        <FormField
          icon={Mail}
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={updateField}
          autoComplete="email"
          required
        />
        <FormField
          icon={Lock}
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={updateField}
          autoComplete="current-password"
          required
        />
        <button className="primary-action" type="submit" disabled={submitting}>
          {submitting ? 'Entrando...' : 'Login'}
        </button>
        <div className="auth-links">
          <Link to="/register">Criar conta</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
