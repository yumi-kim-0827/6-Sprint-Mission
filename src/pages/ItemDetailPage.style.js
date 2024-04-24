import styled from "styled-components";
import ButtonWithIcon from "../components/ButtonWithIcon";

export const ItemDetailPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 16px;
  max-width: 1200px;
`;

export const ToGoItemPageBtn = styled(ButtonWithIcon)`
  margin: 24px auto 80px auto;
  width: 240px;
  height: 48px;
  font-weight: 600;
  font-size: 18px;
  border-radius: 40px;
`;
