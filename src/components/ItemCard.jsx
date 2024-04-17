import "./ItemCard.css";
import likeIcon from "../assets/icon-like-heart.svg";

export default function ItemCard({ item, best, mb, tb, pc }) {
  const isMb = mb ? "mb" : "";
  const isTb = tb ? "tb" : "";
  const isPc = pc ? "pc" : "";
  const isBest = best ? "best" : "";

  return (
    <>
      {item ? (
        <div
          className={`container-item-card ${isBest} ${isMb} ${isTb} ${isPc}`}
        >
          <div className={`image-container ${isBest} ${isMb} ${isPc}`}>
            <img
              className={`image-item-card`}
              src={item.images[0]}
              alt="상품 이미지"
            />
          </div>
          <div className="info-item-card">
            <p className="desc-item-card">{item.name}</p>
            <p className="price-item-card">{item.price}원</p>
            <div className="like-item-card">
              <img src={likeIcon} alt="하트 아이콘" />
              {item.favoriteCount}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
