import React from "react";
import {
  CommentContent,
  CommentDetail,
  CommentDetailText,
  CommentSection,
  CommentTime,
  Commenter,
  CommenterIcon,
} from "../comments_style";
import ic_kebab from "image/ic_kebab.svg";
import formatTime from "utils/formatTime";

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

interface CommentProps {
  comment: CommentType;
}

const Comment = ({ comment }: CommentProps) => {
  const { writer, content, updatedAt } = comment;
  const formattedTime = formatTime(updatedAt);

  return (
    <CommentSection>
      <CommentContent>
        <span>{content}</span>
        <img src={ic_kebab} alt="캡바" />
      </CommentContent>
      <CommentDetail>
        <CommenterIcon src={writer.image} alt="댓글 아이콘" />
        <CommentDetailText>
          <Commenter>{writer.nickname}</Commenter>
          <CommentTime>{formattedTime}</CommentTime>
        </CommentDetailText>
      </CommentDetail>
    </CommentSection>
  );
};

export default Comment;
