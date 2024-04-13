import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { getProductsInfo } from "../components/item/api.js";

function Item() {
  const [products, setProducts] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProductsInfo();
    setProducts(list);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  console.log(products);
  return (
    <>
      <Navigation />
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Item;
