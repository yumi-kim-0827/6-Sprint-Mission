export function SmallButton ({children, onClick, className}) {
  return <button type="button" onClick={onClick} className={`btn-small ${className}`}>{children}</button>
}