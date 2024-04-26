import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { getProduct, getComment } from "./api";
import ProductContent from "./components/ProductContent";
import Commment from "./components/Comment";
import Inquery from "./components/Inquery";

const ProductDetailPage = () => {
  const INITIAL_VALUES = {
    name: "",
    price: 0,
    tags: [],
    images: null,
    favoriteCount: 0,
    description: "",
  };
  const [items, setItems] = useState(INITIAL_VALUES);
  const [comment, setComment] = useState();
  const handleLoad = async () => {
    const items = await getProduct();
    setItems(items);
  };
  const handleCommentLoad = async () => {
    const comment = await getComment();
    setComment(comment);
  };
  useEffect(() => {
    handleLoad();
    handleCommentLoad();
  }, []);

  return (
    <>
      <Nav />
      <ProductContent item={items} />
      <Inquery />
      <Commment />
    </>
  );
};

export default ProductDetailPage;
