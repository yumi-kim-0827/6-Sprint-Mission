export function Button ({children, onClick, size}) {
  const btnStyle = `btn-${size}`;
  return <button type="button" onClick={onClick} className={btnStyle}>{children}</button>
}