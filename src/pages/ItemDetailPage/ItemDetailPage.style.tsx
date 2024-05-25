import styled from "styled-components";
import BaseButton from "../../components/BaseButton";
import SquareImage from "../../components/SquareImage";

export const ItemDetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 16px;
  max-width: 1200px;
`;

export const ToGoItemPageBtn = styled(BaseButton)`
  margin: 24px auto 80px auto;
  width: 240px;
  height: 48px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 40px;

  svg {
    margin-left: 10px;
  }
`;

export const EmptyCommentImageSection = styled.div`
  margin: 0 auto;
  width: 200px;

  > p {
    font-size: 16px;
    font-weight: 400;
    color: #9ca3af;
    text-align: center;
  }
`;
export const EmptyCommentImage = styled(SquareImage)``;
