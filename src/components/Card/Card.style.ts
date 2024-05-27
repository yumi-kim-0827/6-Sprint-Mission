import styled from "styled-components";
import COLORS from "styles/palette";

export const CardContainer = styled.div`
  color: ${COLORS.COOL_GRAY_800};
`;

export const CardTitle = styled.h1`
  margin-top: 14px;
  font-weight: 500;
`;

export const ProductPrice = styled.span`
  display: block;
  margin: 6px 0;
  font-weight: 700;
  font-size: 16px;
`;

export const LikeCount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${COLORS.COOL_GRAY_600};
  font-size: 12px;
`;
