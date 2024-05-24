import { useState, useEffect } from "react";
import { getProducts } from "../api/api";
import { useParams } from "react-router-dom";
import "./ItemPage.css";

function ItemPage() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  const order="favoriteCount"

  const getProductByName = async (orderQuery) => {
    const { list } = await getProducts(orderQuery);
    console.log(list);
    /*
    const productFind = list.find((elem) => {
      console.log(elem.id);
      console.log(productId);
      console.log("------------------")
      return elem.id === productId;
    });
    setProduct(productFind);
    */
  };

  useEffect(() => {
    getProductByName(order);
  }, [order]);

  return (
    <div>
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
