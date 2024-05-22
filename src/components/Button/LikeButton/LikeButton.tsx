import styled from "styled-components";
import { ReactComponent as HeartIcon } from "assets/icon/ic_heart.svg";
import useDeviceState from "hooks/useDeviceState";

export default function LikeButton({ children, onClick }) {
  const { isMobileWidth } = useDeviceState();

  return (
    <StyledLikeButton>
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
  border: 1px solid var(--gray200);
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--cool-gray500);
  font-weight: 500;
  font-size: 16px;
  background-color: white;

  &:focus,
  &:hover {
    background-color: var(--gray50);
  }
`;
