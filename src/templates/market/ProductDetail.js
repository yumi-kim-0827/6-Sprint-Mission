import { getProductComments, getProductData } from "apis/get";
import Loading from "components/Loading";
import { TagList } from "components/Tag";
import useAsync from "hooks/useAsync";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./market.module.scss";
import kebab from "assets/icon/ic_kebab.svg";
import { addCommas } from "utils/commas";
import { Tag } from "components/Tag";
import { Button } from "components/Button";
import { Input } from "components/Input";
import inquiryEmpty from "assets/img/Img_inquiry_empty.svg";
import { ImageCard } from "components/Card/ImageCard/ImageCard";
import backIcon from "assets/icon/ic_back.svg";
import Comment from "components/Comment";
import styled from "styled-components";
import { DEVICE } from "styles/variables";

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <ProductDetailHeader productId={params.productId} />
      <InquiryTemplate productId={params.productId} />
    </>
  );
}

const INTIAL_DATA = {
  favoriteCount: 0,
  images: [],
  tags: [],
  name: "",
  description: "",
  price: 0,
};

function ProductDetailHeader({ productId }) {
  const [productData, setProductData] = useState(INTIAL_DATA);
  const [isLoading, getProductDataAsync] = useAsync(getProductData);

  useEffect(() => {
    (async () => {
      const data = await getProductDataAsync(productId);
      setProductData(data);
    })();
  }, []);

  return (
    <>
      {!isLoading ? (
        <div className={styles.productDetail}>
          <div className={styles.productDetailGrid}>
            <ImageCard
              src={productData.images[0]}
              alt="product-img"
              radius={16}
            />

            <div className={styles.productDetail__notImage}>
              <div className={styles.top}>
                <h1>{productData.name}</h1>
                <img src={kebab} alt="ic-kebab" />
                <span className={styles.price}>
                  {addCommas(productData.price)}원
                </span>
              </div>

              <div className={styles.bottom}>
                <h2>상품 소개</h2>
                <p>{productData.description}</p>
                <h2>상품 태그</h2>
                <TagList>
                  {productData.tags.map((tag) => (
                    <Tag.Product key={tag}>{`#${tag}`}</Tag.Product>
                  ))}
                </TagList>
                <div className={styles.likeBtn}>
                  <Button.Like>{productData.favoriteCount}</Button.Like>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

const PRIVACY_POLICY_NOTICE =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

function InquiryTemplate({ productId }) {
  const [text, setText] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [isLoading, getProductCommentsAsync] = useAsync(getProductComments);

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const data = await getProductCommentsAsync(productId, { limit: 3 });
      console.log(data.list);
      setCommentList(data.list);
    })();
  }, []);

  useEffect(() => {
    console.log(commentList);
  }, [commentList]);

  return (
    <div className={styles.inquiry__template}>
      <h1 className={styles.title}>문의하기</h1>
      <form className={styles.inquiry__form}>
        <Input.Form.Textarea
          name="textarea"
          height={104}
          value={text}
          onChange={onTextChange}
          placeholder={PRIVACY_POLICY_NOTICE}
        />
        <Button.Submit isActive={!!text}>등록</Button.Submit>
      </form>

      {commentList.length > 0 ? (
        <CommentListContainer>
          {commentList.map((comment) => (
            <Comment key={comment.id} data={comment} />
          ))}
        </CommentListContainer>
      ) : (
        <>
          <img
            className={styles.emptyImg}
            src={inquiryEmpty}
            alt="inquiry-img"
          />
          <span className={styles.emptyText}>아직 문의가 없습니다.</span>
        </>
      )}

      <div className={styles.backLink}>
        <Button.Link to="/items" radius={40}>
          <div className={styles.linkFlex}>
            <span>목록으로 돌아가기</span>
            <img src={backIcon} alt="back-icon" />
          </div>
        </Button.Link>
      </div>
    </div>
  );
}

const CommentListContainer = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;

  @media (min-width: ${DEVICE.TABLET}) {
    margin-top: 24px;
  }
`;
