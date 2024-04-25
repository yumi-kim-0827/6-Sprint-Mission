import { useParams } from "react-router-dom";
import { getComments, getProduct } from "../../../shared/api/api";
import { useEffect, useState } from "react";
import {
  INITIAL_PRODUCT_INFO,
  INITIAL_VALUE,
} from "../../../shared/constants/constants";

export const ProductPage = () => {
  const { productId } = useParams();
  const [productInfo, setProductInfo] = useState(INITIAL_PRODUCT_INFO);
  const [dataState, setDataState] = useState(INITIAL_VALUE);

  const getProductInfo = async ({ productId, limit = 3 }) => {
    try {
      setDataState((prevState) => ({
        ...prevState,
        isLoading: true,
        errorMessage: null,
      }));
      const info = await getProduct({ productId });
      const comments = await getComments({ productId, limit });
      setProductInfo({
        info,
        comments,
      });
    } catch (error) {
      setDataState((prevState) => ({ ...prevState, errorMessage: error }));
    } finally {
      setDataState((prevState) => ({ ...prevState, isLoading: false }));
    }
  };

  useEffect(() => {
    getProductInfo({ productId });
  }, [productId]);

  return (
    <>
      {dataState?.errorMessage && <span>{dataState.errorMessage.message}</span>}
      <div>{productInfo.info?.id}</div>
      {dataState?.isLoading && <span>로딩 중입니다.</span>}
      <div>{productInfo.comments?.list[0].id}</div>
    </>
  );
};
