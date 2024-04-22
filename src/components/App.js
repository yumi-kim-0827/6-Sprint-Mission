import Nav from "./Nav";
import "./App.css";

function App({ children }) {
  return (
    <>
      <Nav />
      <div className="content-container">{children}</div>
    </>
  );
}

export default App;
