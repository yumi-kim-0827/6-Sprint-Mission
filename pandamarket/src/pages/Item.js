import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { getProductsInfo } from "../components/item/api.js";
import ProductCard from "../components/item/ProductCard.js";

function Item() {
  const [products, setProducts] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProductsInfo();
    setProducts(list);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  const WIDTH = "220px";
  const HEIGHT = "220px";
  console.log(products);
  return (
    <>
      <Navigation />
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          imgwidth={WIDTH}
          imgheight={HEIGHT}
        />
      ))}
    </>
  );
}

export default Item;
