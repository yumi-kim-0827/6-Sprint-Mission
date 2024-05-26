import React, { useState, useEffect } from "react";
import { CommentsSection, NoComment } from "./comments_style";
import { useCommentsLoading } from "hooks/useCommentsLoading";
import { useParams } from "react-router-dom";
import LoadingMessage from "component/LoadingMessage";
import Comment from "./component/Comment";
import no_comment_ic from "image/Img_inquiry_empty.png";

interface CommentType {
  writer: {
    image: string;
    nickname: string;
    id: 1;
  };
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

const Comments = () => {
  const { productId } = useParams();
  const [isLoading, loadingError, handleLoad] = useCommentsLoading();
  const [comments, setComments] = useState<CommentType[]>([]);

  const loadingMessage = isLoading || loadingError;

  const handleCommentsLoad = async () => {
    const result = await handleLoad({ productId: Number(productId) });

    if (!result || result.list.length === 0) {
      return;
    }

    setComments(result.list);
  };

  useEffect(() => {
    handleCommentsLoad();
  }, []);

  return (
    <CommentsSection>
      {loadingMessage ? (
        <LoadingMessage isLoading={isLoading} loadingError={loadingError} />
      ) : comments.length === 0 ? (
        <NoComment>
          <img src={no_comment_ic} alt="댓글 없음 아이콘" />
          <div>아직 문의가 없습니다.</div>
        </NoComment>
      ) : (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
    </CommentsSection>
  );
};

export default Comments;
