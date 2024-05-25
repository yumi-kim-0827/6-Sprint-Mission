import { Route, Routes } from 'react-router-dom';
import './styles/App.css';

import Home from './Home';
import LandingPage from 'pages/LandingPage';
import Items from './pages/Items';
import FreeBoard from './pages/FreeBoard';
import AddItem from './pages/AddItem';
import ItemDetails from './pages/ItemDetails';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path='/items' element={<Items />} />
          <Route path='/items/:itemId' element={<ItemDetails />} />
          <Route path='/additem' element={<AddItem />} />
          <Route path='/freeboard' element={<FreeBoard />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
