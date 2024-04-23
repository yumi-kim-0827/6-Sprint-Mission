import { useEffect, useReducer, useRef, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import useFetchItems from './hooks/useFetchItems';
import './styles/App.css';

import Main from './Main';
import Items from './pages/Items';
import FreeBoard from './pages/FreeBoard';
import AddItem from './pages/AddItem';
import Edit from './pages/Edit';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return action.data;
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map(item => (String(item.id) === String(action.data.id) ? action.data : item));
    case 'DELETE':
      return state.filter(item => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const ItemStateContext = createContext();
export const ItemDispatchContext = createContext();

export default function App() {
  const { items, loading, error } = useFetchItems({ offset: 0, limit: 10 });
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    dispatch({ type: 'SET_ITEMS', data: items });
  }, [items]);
  const idRef = useRef(10);

  if (loading) return <div>Loading...🐼🎋</div>;
  if (error) return <div>Error 발생!</div>;

  const onCreate = (createdDate, description) => {
    dispatch({
      type: 'CREATE',
      data: {
        createdDate,
        id: idRef.current++,
        description,
      },
    });
  };

  const onUpdate = (id, description) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        description,
      },
    });
  };

  const onDelete = id => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <ItemStateContext.Provider value={data}>
        <ItemDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Main />}>
              <Route path='/items' element={<Items />} />
              <Route path='/additem' element={<AddItem />} />
              <Route path='/itemdetails/:id' element={<ItemDetails />} />
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/freeboard' element={<FreeBoard />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ItemDispatchContext.Provider>
      </ItemStateContext.Provider>
    </>
  );
}
