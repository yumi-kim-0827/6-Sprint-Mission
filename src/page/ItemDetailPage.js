import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "api/api";
import { useAsync } from "hooks/useAsync";
import Button from "components/Button";
import Input from "components/Input";
import "./ItemDetailPage.scss";
import icoHeart from "img/ic_heart.svg";
import icoKebab from "img/ic_kebab.svg";

export function ItemDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [tags, setTags] = useState([]);
  const [isItemDetailLoading, itemDetailLoadingError, getItemDetailAsync] =
    useAsync(getItemDetail);

  const handleLoad = useCallback(
    async (productId) => {
      let productResult = await getItemDetailAsync(productId);
      if (!productResult) return;

      setProduct(productResult);
      setTags(productResult.tags);
    },
    [getItemDetailAsync]
  );

  useEffect(() => {
    handleLoad(productId);
  }, [handleLoad]);

  return (
    <div className="section-wrap">
      <section className="section-detail">
        <div className="section-img">
          <img src={product.images} alt="상품 이미지" className="detail-img" />
        </div>
        <div className="section-content">
          <div className="section-row">
            <h2 className="section-tit">
              <span className="detail-tit">{product.name}</span>
              <button type="button" className="btn-more">
                <img src={icoKebab} alt="더보기" />
              </button>
            </h2>
            <strong className="detail-price">{product.price}원</strong>
            <hr className="line" />
            <section className="section-detail-content">
              <h3 className="section-tit">상품 소개</h3>
              <div className="section-content">
                <p>{product.description}</p>
              </div>
            </section>
            <section className="section-detail-content">
              <h3 className="section-tit">상품 태그</h3>
              <div className="section-content tag-view">
                <ul className="tag-container">
                  {tags.map((tag) => {
                    return <li className="tag-view__list">{tag}</li>;
                  })}
                </ul>
              </div>
            </section>
          </div>
          <div className="section-row">
            <button type="button" className="btn-heart">
              <img src={icoHeart} width="32" alt="좋아요" />
              <span>{product.favoriteCount}</span>
            </button>
          </div>
        </div>
      </section>
      <hr className="line" />
      <section className="section-comment">
        <h3 className="section-tit">문의하기</h3>
        <div className="section-content">
          <Input.Textarea
            name="comment"
            className="input-theme txt-comment"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <Button.Small className="btn-comment">등록</Button.Small>
        </div>
      </section>
      <section className="section-reply">
        {<ul className="reply-list"></ul>}
      </section>
    </div>
  );
}
