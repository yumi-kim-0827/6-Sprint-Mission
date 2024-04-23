import { Route, Routes } from 'react-router-dom';
import './styles/App.css';

import Main from './Main';
import Items from './pages/Items';
import FreeBoard from './pages/FreeBoard';
import AddItem from './pages/AddItem';
import Edit from './pages/Edit';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/items' element={<Items />} />
          <Route path='/additem' element={<AddItem />} />
          <Route path='/items/:id' element={<ItemDetails />} />
          <Route path='/items/:id/edit' element={<Edit />} />
          <Route path='/freeboard' element={<FreeBoard />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
