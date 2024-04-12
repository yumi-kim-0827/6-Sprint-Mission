import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Items from './pages/Items';
import FreeBoard from './pages/FreeBoard';
import AddItem from './pages/AddItem';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Items />} />
          <Route path='/items' element={<Items />} />
          <Route path='/freeboard' element={<FreeBoard />} />
          <Route path='/additem' element={<AddItem />} />
        </Routes>
      </Router>
    </div>
  );
}
