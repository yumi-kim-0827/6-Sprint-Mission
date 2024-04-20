import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

const Layout = ({
  children,
  isHeader = false,
  isFooter = false,
  site = "",
}) => {
  return (
    <>
      {isHeader && <Header site={site} />}
      {children}
      {isFooter && <Footer />}
    </>
  );
};

export default Layout;
