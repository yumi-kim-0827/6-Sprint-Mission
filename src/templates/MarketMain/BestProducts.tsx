import { useEffect, useState } from "react";
import useDeviceState from "hooks/useDeviceState";
import getPageSize from "utils/getPageSize";
import { getProductsData } from "apis/get";
import Loading from "components/Loading";
import useAsync from "hooks/useAsync";
import Card from "components/Card";
import * as S from "./MarketMain.style";

const DEVICE_PRODUCT_COUNT = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
};

export default function BestProducts() {
  const { deviceState } = useDeviceState();
  const [renderDataList, setRenderDataList] = useState([]);
  const [isLoading, getProductsDataAsync] = useAsync(getProductsData);

  useEffect(() => {
    (async () => {
      const pageSize = getPageSize(deviceState, DEVICE_PRODUCT_COUNT);

      const data = await getProductsDataAsync({
        order: "favorite",
        page: 1,
        pageSize,
      });
      setRenderDataList(data.list);
    })();
  }, [deviceState]);

  return (
    <S.BestProductsContainer>
      <h1 className="title">베스트 상품</h1>

      {renderDataList.length > 0 ? (
        <S.BestProductsCards>
          {isLoading ? (
            <Loading height={300} />
          ) : (
            renderDataList.map((data, idx) => <Card key={idx} data={data} />)
          )}
        </S.BestProductsCards>
      ) : (
        <S.NoItems height={300}>상품이 존재하지 않습니다</S.NoItems>
      )}
    </S.BestProductsContainer>
  );
}
