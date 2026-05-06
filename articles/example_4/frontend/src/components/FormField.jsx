export function FormField({ icon: Icon, label, ...props }) {
  return (
    <label className="input-shell">
      <Icon aria-hidden="true" size={28} strokeWidth={1.8} />
      <span className="visually-hidden">{label}</span>
      <input aria-label={label} placeholder={label} {...props} />
    </label>
  );
}
