import styles from "../styles/App.module.css";
import Header from "./Header";

function App({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default App;
