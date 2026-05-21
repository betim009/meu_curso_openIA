import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../api/client";
import { AuthShell } from "../components/AuthShell";

export function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await api.post("/api/auth/register", { fullName, email, password });
      navigate("/login", { replace: true });
    } catch (err: any) {
      setError(err?.response?.data?.message ?? "Não foi possível cadastrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Hello!" subtitle="Sign Up to Get Started">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            className="form-control auth-input"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error ? <div className="text-danger mb-3">{error}</div> : null}
        <button className="btn btn-primary w-100 auth-button" type="submit" disabled={loading}>
          {loading ? "..." : "Register"}
        </button>
        <div className="mt-3 d-flex justify-content-end">
          <Link className="auth-hint" to="/login">
            Already have an account?
          </Link>
        </div>
      </form>
    </AuthShell>
  );
}

