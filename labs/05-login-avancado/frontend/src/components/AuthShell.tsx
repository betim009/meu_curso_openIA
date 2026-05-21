import "./authShell.css";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="auth-shell">
      <aside className="auth-shell__left" aria-hidden="true">
        <div className="auth-shell__decor" />
      </aside>

      <main className="auth-shell__right">
        <div className="auth-card">
          <header className="auth-card__header">
            <h1 className="auth-card__title">{title}</h1>
            <p className="auth-card__subtitle">{subtitle}</p>
          </header>
          {children}
        </div>
      </main>
    </div>
  );
}

