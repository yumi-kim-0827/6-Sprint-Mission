import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Items from "./pages/Items";
import FreeCommunity from "./pages/FreeCommunity";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/items'>
          <Route index element={<Items />} />
          <Route path='addItem' element={<AddItem />} />
        </Route>
        <Route path='/freeCommunity' element={<FreeCommunity />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
