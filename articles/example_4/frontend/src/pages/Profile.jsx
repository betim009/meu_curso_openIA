import { LogOut, Mail, UserRound } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../state/AuthContext.jsx';

export function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <main className="profile-page">
      <section className="profile-panel">
        <div>
          <span className="profile-kicker">Área protegida</span>
          <h1>Seu perfil</h1>
          <p>Dados carregados da API autenticada.</p>
        </div>

        <dl className="profile-data">
          <div>
            <dt>
              <UserRound size={20} /> Nome
            </dt>
            <dd>{user?.name}</dd>
          </div>
          <div>
            <dt>
              <Mail size={20} /> Email
            </dt>
            <dd>{user?.email}</dd>
          </div>
        </dl>

        <button className="secondary-action" type="button" onClick={handleLogout}>
          <LogOut size={20} /> Sair
        </button>
      </section>
    </main>
  );
}
