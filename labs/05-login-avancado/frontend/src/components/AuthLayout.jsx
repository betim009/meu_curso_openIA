export function AuthLayout({ title, subtitle, children }) {
  return (
    <main className="auth-shell">
      <section className="brand-panel" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </section>
      <section className="form-panel">
        <div className="auth-form">
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {children}
        </div>
      </section>
    </main>
  );
}
