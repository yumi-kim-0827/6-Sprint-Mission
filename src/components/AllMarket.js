import { useEffect, useState } from "react";
import "../stlye/allMarket.css";
import { useMediaQuery } from "react-responsive";
import Button from "../common/Button";
import HeartIcon from "../assets/icon/ic_heart.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "./Input";

export default function AllMarket() {
  const [AllData, setAllData] = useState([]);
  const [order, setOrder] = useState("createdAt");

  // 상품 api 받아와서 AllData 배열에 담기
  const getData = async () => {
    const res = await fetch("https://panda-market-api.vercel.app/products");
    const resobj = await res.json();
    setAllData(resobj.list);
  };

  // 페이지당 보여줄 데이터 갯수
  const DataPerPage = () => {
    const isMobile = useMediaQuery({
      query: "(max-width: 767px)",
    });
    const isTablet = useMediaQuery({
      query: "(min-width:768px) and (max-width: 1279px)",
    });

    if (isMobile) return 4;
    else if (isTablet) return 6;
    else return 10;
  };

  useEffect(() => {
    getData();
  }, []);

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
            <Button>상품 등록하기</Button>
          </div>
          <div className="selectInput">
            <Button>임시버튼</Button>
          </div>
        </div>
      </div>
      <div className="cards">
        {AllData.map((item) => (
          <Link>
            <div key={item.id} className="card">
              <img className="all-img" src={item.images[0]} alt={item.name} />
              <p className="all-name">{item.name}</p>
              <p className="all-price">{item.price}원</p>
              <div className="like">
                <img src={HeartIcon} alt="Heart" />
                <p>{item.favoriteCount}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
