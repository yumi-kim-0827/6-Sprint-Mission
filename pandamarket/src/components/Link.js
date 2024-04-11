export function Link({href, children, size}) {
  const btnStyle = size === undefined ? "" : `btn-${size}`;
  return (
    <a href={href} className={`link ${btnStyle}`} >{children}</a>
  );
}