import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="items">
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
