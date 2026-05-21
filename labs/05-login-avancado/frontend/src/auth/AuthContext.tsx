import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../api/client";

export type PublicUser = {
  id: number;
  fullName: string;
  email: string;
  createdAt: string;
};

type AuthState = {
  token: string | null;
  user: PublicUser | null;
  login: (payload: { token: string; user: PublicUser }) => void;
  logout: () => void;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);
const STORAGE_KEY = "auth_token";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(STORAGE_KEY));
  const [user, setUser] = useState<PublicUser | null>(null);

  useEffect(() => {
    const id = api.interceptors.request.use((config) => {
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
    return () => api.interceptors.request.eject(id);
  }, [token]);

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
    setUser(null);
  };

  const login = (payload: { token: string; user: PublicUser }) => {
    localStorage.setItem(STORAGE_KEY, payload.token);
    setToken(payload.token);
    setUser(payload.user);
  };

  const refreshMe = async () => {
    if (!token) return;
    const res = await api.get<{ user: PublicUser }>("/api/me");
    setUser(res.data.user);
  };

  useEffect(() => {
    refreshMe().catch(() => logout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo<AuthState>(() => ({ token, user, login, logout, refreshMe }), [token, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

