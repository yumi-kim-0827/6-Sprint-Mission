

export function ItemList({ item }) {
  return (
    <>
      <div className="itemlist-img-wrap">
        <a href="" className="link">
          <img src={item.images[0]} alt={item.name + " 이미지"} className="itemlist-img"/>
        </a>
      </div>
      <div className="itemlist-content">
        <a href="#" className="link"><h2 className="itemlist__title">{item.description}</h2></a>
        <p className="itemlist__price">{item.price.toLocaleString()}원</p>
        <h2 className="itemlist__favorite">{item.favoriteCount}</h2>
      </div>
    </>
  );
}