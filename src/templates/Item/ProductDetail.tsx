import Loading from "components/Loading";
import { TagList } from "components/Tag";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import kebabIcon from "assets/icon/ic_kebab.svg";
import { addCommas } from "utils/commas";
import { Tag } from "components/Tag";
import { Button } from "components/Button";
import { Input } from "components/Input";
import inquiryEmpty from "assets/img/Img_inquiry_empty.svg";
import { ImageCard } from "components/Card/ImageCard/ImageCard";
import backIcon from "assets/icon/ic_back.svg";
import Comment from "components/Comment";
import * as S from "./ProductDetail.style";
import CommentType from "@/models/comment";
import useAxiosFetch from "hooks/useAxiosFetch";
import Product from "@/models/product";

export default function ProductDetail() {
  const params = useParams();

  return (
    <>
      <ProductDetailInfo productId={params.productId} />
      <InquiryComments productId={params.productId} />
    </>
  );
}

function ProductDetailInfo({ productId }: { productId?: string }) {
  const [productData, setProductData] = useState<Product | null>(null);
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  useEffect(() => {
    (async () => {
      const res = await axiosFetch({
        url: `${productId}`,
      });

      setProductData(res.data);
    })();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <S.ProductDetailInfoContainer>
      <ImageCard src={productData?.images[0]} alt="product-img" />
      <S.InfoContainer>
        <S.InfoTop>
          <h1 className="product-name">{productData?.name}</h1>
          <img className="kebab-icon" src={kebabIcon} alt="ic-kebab" />
          <span className="price">
            {addCommas(productData?.price as number)}원
          </span>
        </S.InfoTop>

        <S.InfoBottom>
          <h2>상품 소개</h2>
          <p>{productData?.description}</p>
          <h2>상품 태그</h2>
          <TagList>
            {productData?.tags.map((tag) => (
              <Tag.Product key={tag}>{`#${tag}`}</Tag.Product>
            ))}
          </TagList>
        </S.InfoBottom>

        <S.LikeBtnBox>
          <Button.Like>{productData?.favoriteCount}</Button.Like>
        </S.LikeBtnBox>
      </S.InfoContainer>
    </S.ProductDetailInfoContainer>
  );
}

const PRIVACY_POLICY_NOTICE =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

function InquiryComments({ productId }: { productId?: string }) {
  const [text, setText] = useState("");
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const { isLoading, error, axiosFetch } = useAxiosFetch();

  const onTextChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setText(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const res = await axiosFetch({
        url: `${productId}/comments`,
        params: {
          limit: 5,
        },
      });

      setCommentList(res.data.list);
    })();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <S.InquiryTemplateContainer>
      <h1 className="title">문의하기</h1>
      <form>
        <Input.Form.Textarea
          name="textarea"
          height={104}
          value={text}
          onChange={onTextChange}
          placeholder={PRIVACY_POLICY_NOTICE}
        />
        <S.SubmitBtnBox>
          <Button.Submit isActive={!!text}>등록</Button.Submit>
        </S.SubmitBtnBox>
      </form>
      {commentList.length > 0 ? (
        <S.CommentListContainer>
          {commentList.map((comment) => (
            <Comment key={comment.id} data={comment} />
          ))}
        </S.CommentListContainer>
      ) : (
        <S.EmptyContainer>
          <img src={inquiryEmpty} alt="inquiry-img" />
          <span>아직 문의가 없습니다.</span>
        </S.EmptyContainer>
      )}
      <S.BackButtonBox>
        <Button.Link to="/items" radius={40}>
          <S.ButtonContent>
            <span>목록으로 돌아가기</span>
            <img src={backIcon} alt="back-icon" />
          </S.ButtonContent>
        </Button.Link>
      </S.BackButtonBox>
    </S.InquiryTemplateContainer>
  );
}
