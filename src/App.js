import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ShowBestProducts from "./components/ShowBestProducts";
import ShowProducts from "./components/ShowProducts";
import { getProduct, getBestProduct } from "./components/api";

function App() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const sortedBestProducts = products.sort((a, b) => b.favorite - a.favorite);

  const handleLoad = async (orderQuery) => {
    const { list } = await getProduct(orderQuery);
    setProducts(list);
  };

  const handleBestLoad = async () => {
    const { list } = await getBestProduct();
    setBestProducts(list);
  };

  function onChangeSelect(e) {
    const value = e.target.value;
    value === "좋아요순" ? setOrder("favorite") : setOrder("recent");
  }

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  useEffect(() => {
    handleBestLoad();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ShowBestProducts products={bestProducts} />
        <ShowProducts onChange={onChangeSelect} products={products} />
      </div>
    </div>
  );
}

export default App;
