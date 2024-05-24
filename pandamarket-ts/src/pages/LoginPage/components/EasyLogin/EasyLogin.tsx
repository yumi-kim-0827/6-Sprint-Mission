import React from "react";
import styled from "styled-components";
import { ReactComponent as googleIcon } from "../../../../assets/images/logo/google.svg";
import { ReactComponent as kakaoIcon } from "../../../../assets/images/logo/kakao.svg";
import Icon from "../../../../components/UI/Icon";

const EasyLoginText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #1f2937;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  background-color: #e6f2ff;
  border-radius: 8px;
  padding: 16px 23px;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
const EasyLogin = () => {
  return (
    <Container>
      <EasyLoginText>간편로그인하기</EasyLoginText>
      <IconContainer>
        <Icon iconComponent={googleIcon} size={42} />
        <Icon iconComponent={kakaoIcon} size={42} outlineColor="none" />
      </IconContainer>
    </Container>
  );
};

export default EasyLogin;
