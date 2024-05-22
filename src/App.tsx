import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';

import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import MarketPage from './pages/MarketPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/market" element={<MarketPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
