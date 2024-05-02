import "../css/Menus.css";
import Menu from "./Menu";

function Menus() {
  return (
    <div>
      <ul className="menus__list">
        <Menu link="/" name="자유게시판" className="menus__menu" />
        <Menu link="/items" name="중고마켓" className="menus__menu" active />
      </ul>
    </div>
  );
}

export default Menus;
