import "../css/Menu.css";

function Menu({ link, name, className = "" }) {
  let color;
  link === "/items" ? (color = "blue") : (color = "");
  // const color = link === "/items" && "blue"; 템플릿 문자열에서 불린은 문자열 타입으로 자동 형변환되기 때문에 의도하지 않은 상황이 발생할 수 있다.
  const classNames = `menu ${color} ${className}`;

  return (
    <a className={classNames} href={link}>
      {name}
    </a>
  );
}

export default Menu;
