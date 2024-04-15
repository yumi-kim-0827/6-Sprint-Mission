import icoHeart from "../img/ic_heart.svg";

export function ItemList({ item }) {
  return (
    <>
      <div className="itemlist-img-wrap">
        <a href="" className="link">
          <img src={item.images[0]} alt={item.name + " 이미지"} className="itemlist-img"/>
        </a>
      </div>
      <div className="itemlist-content">
        <h2 className="itemlist__title"><a href="#" className="link">{item.description}</a></h2>
        <p className="itemlist__price">{item.price.toLocaleString()}원</p>
        <p className="itemlist__favorite">
          <img src={icoHeart} alt="좋아요"/>
          <span>{item.favoriteCount}</span>
        </p>
      </div>
    </>
  );
}