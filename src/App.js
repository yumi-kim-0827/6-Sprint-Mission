// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import NavigationBar from './componenets/NavigationBar';
import Product from './componenets/Product';
import BestProducts from './componenets/BestProducts';
import ItemsPage from './componenets/ItemsPage';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <ItemsPage />
    </div>
  );
}

export default App;
