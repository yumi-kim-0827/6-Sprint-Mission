import "./ItemCard.css";

export default function ItemCard() {
  return (
    <>
      <div className="container">
        <div className="image"></div>
        <div className="info-box">
          <p className="desc">아이패드 미니 팝니다.</p>
          <p className="price">500,000원</p>
          <div className="like">좋아요 카운트</div>
        </div>
      </div>
    </>
  );
}
