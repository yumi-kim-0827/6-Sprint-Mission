import React from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";
import { TextAreaInput } from "./Input";
import styled from "styled-components";

const title = "문의하기";
const placeholder =
  "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.";

const CommentInputBox = ({ className, title }) => {
  return (
    <StyledInputGroup>
      <label>문의하기</label>
      <StyledInput placeholder={placeholder} />
      <StyledAddCommentBtn size="small">등록</StyledAddCommentBtn>
    </StyledInputGroup>
  );
};

const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 16px;
    font-weight: 600;
    color: ##111827;
  }
`;
const StyledInput = styled(TextAreaInput)`
  height: 104px;
  padding: 16px 24px;
`;

const StyledAddCommentBtn = styled(BaseButton)`
  width: 71px;
  height: 42px;
  margin-left: auto;
  font-size: 14px;
`;
export default CommentInputBox;
