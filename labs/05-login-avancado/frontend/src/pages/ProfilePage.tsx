import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export function ProfilePage() {
  const navigate = useNavigate();
  const { user, refreshMe, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    refreshMe()
      .catch(() => setError("Não foi possível carregar seu perfil."))
      .finally(() => setLoading(false));
  }, [refreshMe]);

  const onLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 m-0">Área Protegida</h1>
        <button className="btn btn-outline-primary" onClick={onLogout}>
          Logout
        </button>
      </div>

      {loading ? <div>Carregando...</div> : null}
      {error ? <div className="text-danger">{error}</div> : null}

      {user ? (
        <div className="card">
          <div className="card-body">
            <div className="mb-2">
              <strong>Nome:</strong> {user.fullName}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {user.email}
            </div>
            <div className="mb-0">
              <strong>Criado em:</strong> {new Date(user.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

