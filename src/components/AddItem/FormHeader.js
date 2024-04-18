import styled from "styled-components";
import {
  PureButton,
  buttonEffect,
  smallButton,
} from "../Common/BasicStyledComponents";

const Header = styled.header`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
`;

const Button = styled(PureButton)`
  ${buttonEffect}
  ${smallButton}
  font-weight: 600;
  line-height: 1.2;
`;

function FormHeader({ disabled }) {
  return (
    <Header>
      <H1>상품 등록하기</H1>
      <Button type="submit" disabled={disabled}>
        등록
      </Button>
    </Header>
  );
}

export default FormHeader;
