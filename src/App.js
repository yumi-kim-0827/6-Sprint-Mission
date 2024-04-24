import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ItemsList from "./pages/ItemsList";
import AddItem from "./pages/AddItem";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Item from "./pages/Item";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout isHeader isFooter={true}>
            <Home />
          </Layout>
        }
      />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Items">
        <Route
          index
          element={
            <Layout isHeader={true}>
              <ItemsList />
            </Layout>
          }
        />
        <Route
          path=":productId"
          element={
            <Layout isHeader={true}>
              <Item />
            </Layout>
          }
        />
      </Route>
      <Route
        path="/Community"
        element={
          <Layout isHeader={true}>
            <Community />
          </Layout>
        }
      />
      <Route
        path="/AddItem"
        element={
          <Layout isHeader={true} site="/AddItem">
            <AddItem />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout isHeader={true}>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
