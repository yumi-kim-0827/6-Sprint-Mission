import React from "react";
import styled from "styled-components";
import UserProfile from "./UserProfile";

interface CommentType {
  writer: {
    image: string;
    nickname: string;
  };
  content: string;
  createdAt: string;
}

interface CommentProps {
  data: CommentType;
}

const Comment = ({ data }: CommentProps) => {
  const { writer, content, createdAt } = data;
  const { image, nickname } = writer;

  return (
    <CommentWrapper>
      <CommentBody>{content}</CommentBody>
      <UserProfile image={image} nickname={nickname} updatedAt={createdAt} />
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const CommentBody = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #1f2937;

  white-space: pre-wrap;
`;

export default Comment;
