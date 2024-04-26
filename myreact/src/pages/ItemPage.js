import { useState, useEffect } from "react";
import { getProducts } from "../api/api";
import Header from "../components/Header";
import "./ItemPage.css";

function ItemPage() {
  const [product, setProduct] = useState([]);

  const order="favoriteCount"
  const productName="게이밍 의자"

  const handleLoad = async (orderQuery, productName) => {
    const { list } = await getProducts(orderQuery);
    console.log(list);
    const item = list.find((elem) => elem.Name === productName);
    setProduct(item);
  };

  useEffect(() => {
    handleLoad(order, productName);
  }, [order]);

  console.log(product);
  // const item = getProductByName(product, '게이밍 의자');
  // setProduct(item);

  return (
    <div>
      <Header />
      <img
        className="ProductsListItem-img"
        src={product.images}
        alt={product.name}
      />
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.favoriteCount}</p>
      </div>
    </div>
  );
}

export default ItemPage;
