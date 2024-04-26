import { useParams } from "react-router-dom";
import { getComments, getProduct } from "../../../shared/api/api";
import { useEffect, useState } from "react";
import {
  INITIAL_PRODUCT_INFO,
  INITIAL_VALUE,
} from "../../../shared/constants/constants";
import { ProductInfoSection } from "../../../widgets/ProductInfoSection";
import { Main, MainContent } from "../../../shared/ui/MainContent";
import { Line } from "../../../shared/ui/Line";

export const ProductPage = () => {
  const { productId } = useParams();
  console.log(productId);
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
      setProductInfo((prevProductInfo) => ({
        ...prevProductInfo,
        info,
        comments,
      }));
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
    <Main>
      <MainContent>
        {dataState?.isLoading && <span>로딩 중입니다.</span>}
        {productInfo?.info && <ProductInfoSection info={productInfo.info} />}
        <Line />
        {/* <ProductCommentsSection comments={productInfo.comments} /> */}
        {dataState?.errorMessage && (
          <span>{dataState.errorMessage.message}</span>
        )}
      </MainContent>
    </Main>
  );
};
