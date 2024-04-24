import React from "react";
import UserProfile from "./UserProfile";
import styled from "styled-components";

const Comment = ({ data }) => {
  const { image, nickname, contents, updatedAt } = data;

  return (
    <CommentWrapper>
      <CommentBody>{contents}</CommentBody>
      <UserProfile image={image} nickname={nickname} updatedAt={updatedAt} />
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
