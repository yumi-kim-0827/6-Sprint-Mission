import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './css/style.css';
import Product from './components/Products';

function App() {
  return (
    <Router>
      <Header />
      <Product />
    </Router>
  );
}

export default App;
