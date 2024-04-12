import "./ItemCard.css";
import likeIcon from "../assets/icon-like-heart.svg";

export default function ItemCard({ items, count }) {
  items.sort((a, b) => b.favoriteCount - a.favoriteCount);

  return (
    <>
      {items.length > 0 ? (
        <div className="container-item-card">
          <div className="image-container">
            <img
              className="image-item-card"
              src={items[count].images[0]}
              alt="상품 이미지"
            />
          </div>
          <div className="info-item-card">
            <p className="desc-item-card">{items[count].name}</p>
            <p className="price-item-card">{items[count].price}원</p>
            <div className="like-item-card">
              <img src={likeIcon} alt="하트 아이콘" />
              {items[count].favoriteCount}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
