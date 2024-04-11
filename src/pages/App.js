import GlobalStyle from '../styles/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Items from './Items';
import Login from './Login';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
