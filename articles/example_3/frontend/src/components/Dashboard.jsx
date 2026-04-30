import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiEdit2, FiLogOut, FiPlus, FiSave, FiTrash2, FiX } from 'react-icons/fi';
import api from '../services/api.js';

const emptyForm = { name: '', email: '', password: '' };

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');

  const title = useMemo(() => (editingId ? 'Editar usuario' : 'Novo usuario'), [editingId]);

  async function loadData() {
    const [{ data: meData }, { data: usersData }] = await Promise.all([
      api.get('/auth/me'),
      api.get('/users'),
    ]);
    setCurrentUser(meData.user);
    setUsers(usersData.users);
  }

  useEffect(() => {
    loadData().catch(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    });
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
    setMessage('');
  }

  function startEdit(user) {
    setEditingId(user.id);
    setForm({ name: user.name, email: user.email, password: '' });
    setMessage('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    try {
      const payload = { ...form };
      if (editingId && !payload.password) {
        delete payload.password;
      }

      if (editingId) {
        await api.put(`/users/${editingId}`, payload);
      } else {
        await api.post('/users', payload);
      }

      resetForm();
      await loadData();
    } catch (error) {
      setMessage(error.response?.data?.message || 'Nao foi possivel salvar o usuario.');
    }
  }

  async function removeUser(id) {
    await api.delete(`/users/${id}`);
    await loadData();
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <h1>Usuarios</h1>
          {currentUser && <p>{currentUser.name} | {currentUser.email}</p>}
        </div>
        <button className="btn btn-outline-light" onClick={handleLogout} type="button">
          <FiLogOut />
          Sair
        </button>
      </header>

      <section className="workspace">
        <form className="editor" onSubmit={handleSubmit}>
          <h2>{title}</h2>

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
              required={!editingId}
              placeholder={editingId ? 'Deixe em branco para manter' : ''}
            />
          </label>

          {message && <div className="alert alert-danger">{message}</div>}

          <div className="actions">
            <button className="btn btn-primary" type="submit">
              {editingId ? <FiSave /> : <FiPlus />}
              {editingId ? 'Salvar' : 'Criar'}
            </button>
            {editingId && (
              <button className="btn btn-outline-secondary" onClick={resetForm} type="button">
                <FiX />
                Cancelar
              </button>
            )}
          </div>
        </form>

        <div className="table-wrap">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Criado em</th>
                <th className="text-end">Acoes</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.created_at).toLocaleString('pt-BR')}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-outline-primary icon-button"
                      onClick={() => startEdit(user)}
                      title="Editar"
                      type="button"
                    >
                      <FiEdit2 />
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger icon-button"
                      onClick={() => removeUser(user.id)}
                      title="Excluir"
                      type="button"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted py-4">
                    Nenhum usuario cadastrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
