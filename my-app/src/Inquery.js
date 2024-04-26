import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { getProduct } from "./api";
import ProductContent from "./components/ProductContent";

const Inquery = () => {
  const INITIAL_VALUES = {
    name: "",
    price: 0,
    tags: [],
    images: null,
    favoriteCount: 0,
    description: "",
  };
  const [items, setItems] = useState(INITIAL_VALUES);
  const handleLoad = async () => {
    const items = await getProduct();
    setItems(items);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Nav />
      <ProductContent item={items} />
    </>
  );
};

export default Inquery;
