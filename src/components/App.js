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
      <Routes>
        <Route path="/items" element={<Items />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
