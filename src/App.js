import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage/HomePage";
import MarketPage from "./pages/MarketPage/MarketPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ItemDetails from "./pages/ItemDetailsPage/ItemDetails";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="items/additem" element={<AddItemPage />} />
          <Route path="feed" element={<CommunityFeedPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="sighup" element={<SignupPage />} />
          <Route path="items/:itemID" element={<ItemDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
