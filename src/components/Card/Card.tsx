import { Link } from "react-router-dom";
import Product from "models/product";
import { addCommas } from "utils/commas";
import { ReactComponent as HeartIcon } from "assets/icon/ic_heart.svg";
import { ImageCard } from "./ImageCard/ImageCard";
import * as S from "./Card.style";

export default function Card({ data }: { data: Product }) {
  const { id, images = [], name: title, price, favoriteCount } = data;

  return (
    <Link to={`/items/${id}`}>
      <S.CardContainer>
        <ImageCard src={images[0]} alt="product-img" />
        <S.CardTitle>{title}</S.CardTitle>
        <S.ProductPrice>{`${addCommas(price)}원`}</S.ProductPrice>
        <S.LikeCount>
          <HeartIcon width={16} height={16} strokeWidth={1.2} />
          <span>{favoriteCount}</span>
        </S.LikeCount>
      </S.CardContainer>
    </Link>
  );
}
