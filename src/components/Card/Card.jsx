import { Link } from "react-router-dom";
import { addCommas } from "utils/commas";
import HeartIcon from "assets/icon/ic_heart.svg";
import * as S from "./Card.style";

export default function Card({ data }) {
  const { id, images = [], name: title, price, favoriteCount } = data;

  return (
    <Link to={`/items/${id}`}>
      <S.CardContainer>
        <S.ProductImg src={images[0]} alt="product-img" />
        <S.CardTitle>{title}</S.CardTitle>
        <S.ProductPrice>{`${addCommas(price)}원`}</S.ProductPrice>
        <S.LikeCount>
          <img src={HeartIcon} alt="heart-icon" />
          <span>{favoriteCount}</span>
        </S.LikeCount>
      </S.CardContainer>
    </Link>
  );
}
