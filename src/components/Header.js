import "../css/Header.css";
import Navbar from "./Navbar";

function Header({ children }) {
  return (
    <div className="header">
      <Navbar />
      {children}
    </div>
  );
}

export default Header;
