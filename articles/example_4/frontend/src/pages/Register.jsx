import { Lock, Mail, User } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api/client.js';
import { AuthLayout } from '../components/AuthLayout.jsx';
import { FormField } from '../components/FormField.jsx';

export function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
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
      await api.post('/api/auth/register', form);
      navigate('/login', { replace: true, state: { registered: true } });
    } catch (requestError) {
      setError(requestError.response?.data?.message || 'Não foi possível criar a conta.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthLayout title="Hello!" subtitle="Sign Up to Get Started">
      <form onSubmit={handleSubmit} className="auth-stack">
        {error && <div className="alert alert-danger">{error}</div>}
        <FormField
          icon={User}
          label="Full Name"
          name="name"
          value={form.name}
          onChange={updateField}
          autoComplete="name"
          required
        />
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
          minLength={6}
          value={form.password}
          onChange={updateField}
          autoComplete="new-password"
          required
        />
        <button className="primary-action" type="submit" disabled={submitting}>
          {submitting ? 'Criando...' : 'Register'}
        </button>
        <div className="auth-links">
          <Link to="/login">Já tenho conta</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
