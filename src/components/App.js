import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Items from './Items';

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/items" element={<Items />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
