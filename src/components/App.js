import "../styles/App.css";
import NavBar from "./NavBar";

function App({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default App;
