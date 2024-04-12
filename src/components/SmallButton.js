export function SmallButton ({children, onClick}) {
  return <button type="button" onClick={onClick} className="btn-small">{children}</button>
}