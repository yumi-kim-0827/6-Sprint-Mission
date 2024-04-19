import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Main from './Main';
import Header from './components/Header';
import Items from './pages/Items';
import FreeBoard from './pages/FreeBoard';
import AddItem from './pages/AddItem';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/items' element={<Items />} />
            <Route path='/additem' element={<AddItem />} />
            <Route path='/freeboard' element={<FreeBoard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
