import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDetail } from "../../../services/api";
import HeartIconUrl from "../../../assets/icons/icon-heart.svg";

function ItemDetailSection() {
  const [itemDetail, setItemDetail] = useState({});

  const { productId } = useParams();
  const fetchData = async () => {
    const productDetail = await getProductDetail(productId);
    setItemDetail(productDetail);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="item-detail-card">
        <img
          src={itemDetail.images}
          alt={itemDetail.name}
          className="item-detail-img"
        />
        <div className="item-details">
          <div>
            <h1 className="item-detail-name">{itemDetail.name}</h1>
            <div className="item-detail-price">
              {Number(itemDetail.price).toLocaleString()}원
            </div>
            <hr />
            <h2>상품 소개</h2>
            <div className="item-detail-description">
              {itemDetail.description}
            </div>
            <h2>상품 태그</h2>
            <div className="item-detail-tags">
              {itemDetail.tags?.map((tag) => (
                <nav key={itemDetail.id} className="item-detail-tag">
                  #{tag}
                </nav>
              ))}
            </div>
          </div>

          <nav className="item-detail-favorite">
            <img src={HeartIconUrl} />
            {itemDetail.favoriteCount}
          </nav>
        </div>
      </div>
      <hr />
    </>
  );
}

export default ItemDetailSection;
