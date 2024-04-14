import "../styles/global.scss";
import Nav from "./ui/Nav";
function App({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default App;
