import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { AuthShell } from "../components/AuthShell";
import { useAuth, type PublicUser } from "../auth/AuthContext";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const redirectTo = useMemo(() => {
    const state = location.state as { from?: string } | null;
    return state?.from ?? "/profile";
  }, [location.state]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await api.post<{ token: string; user: PublicUser }>("/api/auth/login", { email, password });
      login(res.data);
      navigate(redirectTo, { replace: true });
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Não foi possível fazer login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Hello Again!" subtitle="Welcome Back">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            className="form-control auth-input"
            placeholder="Email Address"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control auth-input"
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error ? <div className="text-danger mb-3">{error}</div> : null}
        <button className="btn btn-primary w-100 auth-button" type="submit" disabled={loading}>
          {loading ? "..." : "Login"}
        </button>
        <div className="mt-3 d-flex justify-content-between">
          <span className="auth-hint">Forgot Password</span>
          <Link className="auth-hint" to="/register">
            Create account
          </Link>
        </div>
      </form>
    </AuthShell>
  );
}

