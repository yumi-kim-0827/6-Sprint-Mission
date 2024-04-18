import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout isHeader={true} isFooter={true}>
            <Home />
          </Layout>
        }
      />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route
        path="/Items"
        element={
          <Layout isHeader={true}>
            <Items />
          </Layout>
        }
      />
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
          <Layout isHeader={true}>
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
