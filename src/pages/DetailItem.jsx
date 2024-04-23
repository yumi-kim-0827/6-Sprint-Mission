import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../api";
import "./DetailItem.css";
import likeicon from "../assets/like-icon.png";

const ShowDetail = ({ images, name, price, description, tags, favoriteCount }) => {
  return (
    <div className="show-item-detail">
      <img className="show-item-detail__img" src={images} alt="제품 상세 페이지 내부 제품 이미지" />
      <div className="show-item-details">
        <h3 className="show-item-details__name">{name} 팔아요</h3>
        <h2 className="show-item-details__price">{price.toLocaleString()}</h2>
        <h4>상품 소개</h4>
        <p className="show-item-details__description">{description}</p>
        <h4>상품 태그</h4>
        {tags.map((tag) => {
          return <p className="show-item-details__tags" key={tag}>{`# ${tag}`}</p>;
        })}
        <div className="show-item-details-icon">
          <img className="show-item-details-icon__likeicon" src={likeicon} alt="제품 상세 페이지 내부 좋아요 아이콘" />
          <p className="show-item-details-icon__favoritecount">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
};

const DetailItem = () => {
  const { Id } = useParams();
  const [detailItem, setDetailItem] = useState();

  const handleDetailLoad = async (value) => {
    const item = await getDetailProduct(value);
    setDetailItem(item);
  };

  useEffect(() => {
    handleDetailLoad(Id);
  }, []);

  return <div className="show-detail-page">{detailItem !== undefined && <ShowDetail {...detailItem} />}</div>;
};

export default DetailItem;
