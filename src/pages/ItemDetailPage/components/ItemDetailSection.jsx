import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetail } from "../../../services/api";

function ItemDetailSection() {
  const [itemDetail, setItemDetail] = useState({});

  const { productId } = useParams();
  const fetchData = async () => {
    const productDetail = await getProductDetail(productId);
    setItemDetail(productDetail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img src={itemDetail.images} alt={itemDetail.name} />
      {itemDetail.name}
      {itemDetail.price}
      {itemDetail.description}
      {itemDetail.tags}
    </div>
  );
}

export default ItemDetailSection;
