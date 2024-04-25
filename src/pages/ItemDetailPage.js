import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as S from "./ItemDetailPage.style.js";

import ItemDetailPageCardLarge from "../components/ItemDetailPageCardLarge.js";
import CommentInputBox from "../components/CommentInputBox";
import Comment from "../components/Comment";

import { getItem, getItemComments } from "../services/api.js";

import IconBack from "../assets/icon/back.svg";
import EmptyCommentImage from "../assets/img/Img_inquiry_empty.png";

const EmptyCommentImageSection = () => {
  return (
    <S.EmptyCommentImageSection>
      <S.EmptyCommentImage src={EmptyCommentImage} alt="댓글이 없습니다" />
      <p>아직 댓글이 없습니다</p>
    </S.EmptyCommentImageSection>
  );
};

const ItemDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const item = await getItem(id);
        setProduct(item);
      } catch (err) {
        console.error("상품을 불러오는 중 오류가 발생했습니다:", err);
      }
    };

    const fetchItemComments = async () => {
      try {
        const itemComments = await getItemComments(id);
        setComments(itemComments.list);
      } catch (err) {
        console.error("상품 댓글을 불러오는 중 오류가 발생했습니다:", err);
      }
    };

    fetchItem();
    fetchItemComments();
  }, [id]);

  console.log(comments);

  return (
    <>
      {product && (
        <S.ItemDetailPageWrapper>
          <ItemDetailPageCardLarge data={product} />
          <CommentInputBox title="문의하기" />
          {comments.length > 0 ? (
            comments.map((comment) => <Comment data={comment} />)
          ) : (
            <EmptyCommentImageSection />
          )}
          <Link to="/items">
            <S.ToGoItemPageBtn src={IconBack}>
              목록으로 돌아가기
            </S.ToGoItemPageBtn>
          </Link>
        </S.ItemDetailPageWrapper>
      )}
    </>
  );
};

export default ItemDetailPage;
