import { useEffect, useState } from "react";
import Card from "components/Card";
import Loading from "components/Loading";
import useDeviceState from "hooks/useDeviceState";
import useAxiosFetch from "hooks/useAxiosFetch";
import { DeviceProductCount } from "models/device";
import Product from "models/product";
import getPageSize from "utils/getPageSize";
import * as S from "./FleaMarket.style";

const DEVICE_PRODUCT_COUNT: DeviceProductCount = {
  mobile: 1,
  tablet: 2,
  desktop: 4,
};

export default function BestProducts() {
  const { deviceState } = useDeviceState();
  const [renderDataList, setRenderDataList] = useState<Product[]>([]);
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  useEffect(() => {
    (async () => {
      const pageSize = getPageSize(deviceState, DEVICE_PRODUCT_COUNT);

      const res = await axiosFetch({
        url: "products",
        params: {
          orderBy: "favorite",
          page: 1,
          pageSize,
        },
      });

      setRenderDataList(res.data.list);
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
