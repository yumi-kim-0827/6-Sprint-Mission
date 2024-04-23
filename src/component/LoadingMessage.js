import React from "react";

const LoadingMessage = ({isLoading,loadingError,noResult}) => {
  if (isLoading) {
    return <div>로딩 중입니다</div>;
  }
  if (loadingError) {
    return <div>상품을 가져오는데 실패했어요</div>;
  }
  if (noResult) {
    return <div>일치하는 상품이 없습니다</div>;
  }else return <></>
};

export default LoadingMessage;
