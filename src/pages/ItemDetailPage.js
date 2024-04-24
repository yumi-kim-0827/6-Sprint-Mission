import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./ItemDetailPage.style.js";

import ItemDetailPageCardLarge from "../components/ItemDetailPageCardLarge.js";
import CommentInputBox from "../components/CommentInputBox";
import Comment from "../components/Comment";

import { getItem, getItemComments } from "../services/api.js";

import IconBack from "../assets/icon/back.svg";

const MOCK_COMMENTS = {
  image: null,
  nickname: "MOCK 판다",
  contents: "으아아아아아아아악",
  updatedAt: new Date("2024-04-22"),
};

const ItemDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([MOCK_COMMENTS]);

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
        setComments(itemComments);
        // console.log(itemComments);
      } catch (err) {
        console.error("상품을 불러오는 중 오류가 발생했습니다:", err);
        // ! 현재 백엔드 api 업데이트 안되있음
      }
    };

    fetchItem();
    fetchItemComments();
  }, [id]);

  return (
    <>
      {product && (
        <S.ItemDetailPageWrapper>
          <ItemDetailPageCardLarge data={product} />
          <CommentInputBox />
          {comments.map((comment) => (
            <Comment data={comment} />
          ))}
          <S.ToGoItemPageBtn src={IconBack}>
            목록으로 돌아가기
          </S.ToGoItemPageBtn>
        </S.ItemDetailPageWrapper>
      )}
    </>
  );
};

export default ItemDetailPage;
