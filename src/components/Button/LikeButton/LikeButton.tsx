import { ReactNode } from "react";
import styled from "styled-components";
import useDeviceState from "hooks/useDeviceState";
import { ReactComponent as HeartIcon } from "assets/icon/ic_heart.svg";
import COLORS from "styles/palette";

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

export default function LikeButton({ children, onClick }: Props) {
  const { isMobileWidth } = useDeviceState();

  return (
    <StyledLikeButton onClick={onClick}>
      <HeartIcon
        width={isMobileWidth ? 24 : 32}
        height={isMobileWidth ? 24 : 32}
        strokeWidth={1}
      />
      {children}
    </StyledLikeButton>
  );
}

const StyledLikeButton = styled.button`
  border-radius: 35px;
  border: 1px solid ${COLORS.GRAY_200};
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${COLORS.COOL_GRAY_500};
  font-weight: 500;
  font-size: 16px;
  background-color: white;

  &:focus,
  &:hover {
    background-color: ${COLORS.GRAY_50};
  }
`;
