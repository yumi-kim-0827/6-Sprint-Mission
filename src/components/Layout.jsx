import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

const Layout = ({ children, isHeader = false, isFooter = false }) => {
  return (
    <>
      {isHeader && <Header />}
      {children}
      {isFooter && <Footer />}
    </>
  );
};

export default Layout;
