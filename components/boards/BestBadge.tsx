import styled from "styled-components";
import MedalIcon from "@/public/images/ic_medal.svg";

const BestBadge = () => {
  return (
    <SBestBadge>
      <MedalIcon />
      Best
    </SBestBadge>
  );
};

const SBestBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 102px;
  height: 30px;
  border-radius: 0 0 32px 32px;
  background-color: var(--color-blue);
  font-size: 16px;
  font-weight: 600;
  color: var(--color-white);
`;

export default BestBadge;
