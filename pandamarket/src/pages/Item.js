import { useEffect, useMemo, useState } from "react";
import Navigation from "../components/Navigation";
import { getProductsInfo } from "../components/item/api.js";
import AllProductsSection from "../components/item/AllProductsSection.js";
import BestProductsSection from "../components/item/BestProductsSection.js";
function Item() {
  const [products, setProducts] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProductsInfo();
    setProducts(list);
  };

  const sortProductsByFavorites = (products) => {
    return [...products].sort((a, b) => b.favoriteCount - a.favoriteCount);
  };

  const bestProducts = useMemo(() => {
    return sortProductsByFavorites(products);
  }, [products]);

  useEffect(() => {
    handleLoad();
  }, []);

  console.log(bestProducts);
  return (
    <>
      <Navigation />
      <BestProductsSection products={bestProducts} />
      <AllProductsSection />
    </>
  );
}

export default Item;
