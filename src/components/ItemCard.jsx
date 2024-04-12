import "./ItemCard.css";
import likeIcon from "../assets/icon-like-heart.svg";

export default function ItemCard({ items, count, mb, tb, pc }) {
  console.log("아이템:", items);
  console.log("카운트:", count);
  console.log("mb:", mb);
  const checkMb = mb ? "mb" : "";
  const checkTb = tb ? "tb" : "";
  const checkPc = pc ? "pc" : "";

  return (
    <>
      {items.length > 0 ? (
        <div className={`container-item-card ${checkMb} ${checkTb} ${checkPc}`}>
          <div className={`image-container ${checkMb}`}>
            <img
              className={`image-item-card`}
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
