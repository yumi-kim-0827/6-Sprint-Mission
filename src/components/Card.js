import heartIcon from "../assets/ic_heart.png";
import "./Card.css";

function Card({ description, favoriteCount, images, name, price }) {
  const itemImg = {
    backgroundImage: `url(${images[0]})`,
  };

  const changeArray = description.split(" ");
  const findSliceEnd = changeArray.findIndex(
    (el) => el === "팔아요" || el === "팝니다"
  );
  const title = changeArray.slice(0, findSliceEnd + 1).join(" ");

  return (
    <li className='card'>
      <div className='card-image' style={itemImg}></div>
      <div className='card-description'>
        <p className='card-title'>{title ? title : name}</p>
        <h3 className='card-price'>{`${Number(price).toLocaleString()}원`}</h3>
        <p className='card-favorite'>
          <img className='favorite-icon' src={heartIcon} alt='하트 아이콘' />
          <span className='favorite-count'>{favoriteCount}</span>
        </p>
      </div>
    </li>
  );
}

export default Card;
