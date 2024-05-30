import { Link } from "react-router-dom";

import "../css/Menu.css";

function Menu({ link, name, className = "", active = null }) {
  let classNames = `menu ${className}`;
  if (active) {
    classNames += " active";
  }

  return (
    <li>
      <Link to={link} className={classNames}>
        {name}
      </Link>
    </li>
  );
}

export default Menu;
