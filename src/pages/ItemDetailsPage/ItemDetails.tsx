import React, { useEffect, useState } from "react";
import { formatCurrencyWon } from "../../utils/formatCurrencyWon";
import ItemDetailsComments from "./ItemDetailsComments";
import "./ItemDetails.css";
import likeIcon from "../../assets/ic_heart.svg";
import returnIcon from "../../assets/ic_back.svg";
import { Link, useParams } from "react-router-dom";
import { ProductInfo } from "../../types";
import getItemInfoById from "../../api/getItemInfoById";

function ItemDetails() {
  const [item, setItem] = useState<ProductInfo | null>(null);
  const { itemID } = useParams<{ itemID: string }>();
  const pathName: string = `products/${itemID}`;

  const handleLoadItemInfo = async () => {
    try {
      const data = await getItemInfoById(pathName);
      if (data) {
        setItem(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleLoadItemInfo();
  }, []);

  return (
    <>
      <section className="main__content-container">
        {item && (
          <>
            <div className="main__content-image-box">
              <img
                className="main__content-image"
                src={item.images}
                alt="제품이미지"
              />
            </div>
            <div className="main__content">
              <div className="main__content-label">{item.name}</div>
              <div className="main__content-price">
                {formatCurrencyWon(item.price)}
              </div>
              <hr />
              <div className="main__content-info-box">
                <div className="main__content-des-box">
                  <div className="main__content-des-label">상품소개</div>
                  <div className="main__content-des-text">
                    {item.description}
                  </div>
                </div>
                <div className="main__content-des-box">
                  <div className="main__content-des-label">상품태그</div>
                  <div className="main__content-des-tags">
                    {item.tags &&
                      item.tags.map((tag) => {
                        return (
                          <div key={tag} className="main__content-des-tag">
                            #{tag}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <button className="main__content-like">
                <img className="like-icon" src={likeIcon} alt="좋아요버튼" />
                {item.favoriteCount}
              </button>
            </div>
          </>
        )}
      </section>
      <hr />
      <form className="comment-form">
        <label className="comment-form__label" htmlFor="inquiry">
          문의하기
        </label>
        <textarea
          className="comment-form__input"
          id="inquiry"
          //value={}
          name="inquiry"
          //onChange={}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고,
           불법 정보 유포시 모니터링 후 삭제될 수 있으며,
            이에 대한 민형사상 책임은 게시자에게 있습니다."
          required
        />
        <button className="comment-form__button">등록</button>
      </form>
      {itemID && <ItemDetailsComments itemID={itemID} />}
      <div className="button__return-box">
        <Link to="/items">
          <button className="button__return">
            목록으로돌아가기
            <img className="image-return" src={returnIcon} alt="이전목록" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default ItemDetails;
