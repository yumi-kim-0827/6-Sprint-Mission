import "../styles/ItemBox.css";
const ItemBox = ({ item }) => {
  return (
    <div className="item-box">
      <div className="item-img-container">
        <img className="item-img" src={item.images[0]} alt={item.name} />
      </div>
      <div className="item-contents">
        <h3 className="item-title">{item.name} 팝니다</h3>
        <p className="item-price">{item.price} 원</p>
        <p className="item-favorite">하트 {item.favoriteCount}</p>
      </div>
    </div>
  );
};

export default ItemBox;
