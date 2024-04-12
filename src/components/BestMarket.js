import iPad from "../assets/img/mock/ipad.png";
import Book from "../assets/img/mock/book.png";
import WashingMachine from "../assets/img/mock/washing-machine.png";
import Oven from "../assets/img/mock/oven.png";
import HeartIcon from "../assets/icon/ic_heart.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "../stlye/bestMarket.css";

const BEST_DATA = [
  {
    id: 1,
    images: [iPad],
    name: "아이패드 미니 팝니다",
    price: 500_000,
    favoriteCount: 240,
  },
  {
    id: 2,
    images: [Book],
    name: "책 팝니다",
    price: 50_000,
    favoriteCount: 800,
  },
  {
    id: 3,
    images: [WashingMachine],
    name: "세탁기 팝니다",
    price: 500_000,
    favoriteCount: 700,
  },
  {
    id: 4,
    images: [Oven],
    name: "오븐 팝니다",
    price: 300_000,
    favoriteCount: 500,
  },
];

export default function BestMarket() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width: 1279px)",
  });

  var showData = [];

  if (isMobile) showData = BEST_DATA.slice(0, 1);
  else if (isTablet) showData = BEST_DATA.slice(0, 2);
  else showData = BEST_DATA;

  return (
    <div className="best-market">
      <h1 className="best-title">베스트 상품</h1>
      <div className="cards">
        {showData.map((item) => (
          <Link>
            <div key={item.id} className="card">
              <img className="best-img" src={item.images[0]} alt={item.name} />
              <p className="best-name">{item.name}</p>
              <p className="best-price">{item.price}원</p>
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
