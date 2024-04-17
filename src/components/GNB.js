import { NavLink } from "react-router-dom";

function getLinkClass({ isActive }) {
  return isActive ? "link on" : "link";
}

export function GNB () {
  return (
    <ul className="gnb">
      <li className="gnb-list"><NavLink to="/" className={getLinkClass}>자유게시판</NavLink></li>
      <li className="gnb-list"><NavLink to="/items" className={getLinkClass}>중고마켓</NavLink></li>
    </ul>
  );
}