import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import logoImg from "../assets/logo.png";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <ul className={styles.menu}>
          <Link to="/">
            <img className={styles.logo} src={logoImg} alt="Codethat Logo" />
          </Link>
          <NavLink>
            <li className={styles.item}>자유게시판</li>
          </NavLink>
          <NavLink
            to="/items"
            style={({ isActive }) => {
              return {
                color: isActive ? "#3692ff" : "",
              };
            }}
          >
            <li className={styles.item}>중고마켓</li>
          </NavLink>
        </ul>
        <button className={styles.login__button}>로그인</button>
      </Container>
    </div>
  );
}

export default Nav;
