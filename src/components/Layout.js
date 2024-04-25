import Nav from "./Nav";
import "./Layout.css";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="content-container">{children}</div>
    </>
  );
}

export default Layout;
