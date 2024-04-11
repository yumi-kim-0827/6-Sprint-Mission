import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/items">Items 페이지로 이동</Link>
      </header>
    </div>
  );
}

export default App;
