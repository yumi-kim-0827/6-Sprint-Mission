import { useEffect, useState } from "react";
import "./Items.css";
import ShowBestProducts from "../components/ShowBestProducts";
import ShowProducts from "../components/ShowProducts";
import { getProduct, getBestProduct } from "../components/api";

function App() {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("recent");

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

  function onChangeInput(e) {
    const value = e.target.value;
    value === "" ? setOrder("recent") : setOrder(value);
  }

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  useEffect(() => {
    handleBestLoad();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <ShowBestProducts products={bestProducts} />
        <ShowProducts onChangeSelect={onChangeSelect} onChangeInput={onChangeInput} products={products} />
      </div>
    </div>
  );
}

export default App;
