import { getProductData } from "apis/get";
import Loading from "components/Loading";
import GNB from "components/Navbar/GNB";
import { TagList } from "components/Tag";
import useAsync from "hooks/useAsync";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const INTIAL_DATA = {
  favoriteCount: 0,
  images: [],
  tags: [],
  name: "",
  description: "",
  price: 0,
};

export default function ItemPage() {
  const params = useParams();
  const [productData, setProductData] = useState(INTIAL_DATA);
  const [isLoading, getProductDataAsync] = useAsync(getProductData);

  useEffect(() => {
    (async () => {
      const data = await getProductDataAsync(params.productId);
      setProductData(data);
    })();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <GNB />
          <img src={productData.images[0]} alt="product-img" />
          <h1>{productData.name}</h1>
          <span>{productData.price}</span>
          <p>{productData.description}</p>
          <TagList tagList={productData.tags} />
          <span>{productData.favoriteCount}</span>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
