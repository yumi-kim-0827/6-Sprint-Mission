import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MarketPage from './page/MarketPage';
import AddItemPage from './page/AddItemPage';
import HomePage from './page/HomePage';
import styles from './App.module.css';
import ItemsPage from './page/ItemsPage';

function App() {
  return (
    <div className={styles.wrap}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items" element={<MarketPage />} />
          <Route path="/additem" element={<AddItemPage />} />
          <Route path="/items/:productId" element={<ItemsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
