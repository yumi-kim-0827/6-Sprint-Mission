import { useEffect, useState } from "react";
import "../stlye/allMarket.css";
// import { useMediaQuery } from "react-responsive";
import Button from "../common/Button";
import HeartIcon from "../assets/icon/ic_heart.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";
import Commas from "../util/Commas";
import SelectBtn from "./SelectBtn";
import { getData } from "./API";

export default function AllMarket() {
  const [Data, setData] = useState([]);
  const [order, setOrder] = useState("recent");
  // const [page, setPage] = useState(1);
  const page = 1;
  const size = 10;

  const handleLoad = async () => {
    try {
      const result = await getData({ page, size, order });
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    handleLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  const handleSortOrderChange = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  return (
    <div className="all-market">
      <div className="all-header">
        <div>
          <h1 className="all-title">전체 상품</h1>
        </div>
        <div className="all-search-input">
          <div className="searchInput">
            <SearchInput />
          </div>
          <div className="button">
            <Button to="/additem">상품 등록하기</Button>
          </div>
          <div className="selectInput">
            {/* SelectBtn 컴포넌트에 정렬 기능을 구현하는 함수를 props로 전달 */}
            <SelectBtn onChange={handleSortOrderChange} />
          </div>
        </div>
      </div>
      {Data.length > 0 && (
        <div className="cards">
          {Data.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="card">
                <img className="all-img" src={item.images[0]} alt={item.name} />
                <p className="all-name">{item.name}</p>
                <p className="all-price">{Commas(item.price)}원</p>
                <div className="like">
                  <img src={HeartIcon} alt="Heart" />
                  <p>{item.favoriteCount}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
