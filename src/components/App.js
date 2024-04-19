import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Items from './Items';
import AddItemPage from '../pages/AddItemPage';
function App() {
  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <Navbar />
      <div className="container">
        <Routes>
          <Route>
            <Route path="/items" element={<Items />} />
            <Route path="/additem" element={<AddItemPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
