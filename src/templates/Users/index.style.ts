import styled from "styled-components";
import { onTabletAndPc } from "styles/mediaQuery";
import COLORS from "styles/palette";

export const LogoBox = styled.div`
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const AuthLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 198px;
  height: 66px;

  ${onTabletAndPc} {
    width: 396px;
    height: 132px;
  }
`;

export const AuthForm = styled.form`
  .input-block {
    margin-bottom: 16px;

    ${onTabletAndPc} {
      margin-bottom: 24px;
    }

    .label {
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 700;
      display: block;

      ${onTabletAndPc} {
        font-size: 18px;
        margin-bottom: 16px;
      }
    }
  }

  .error-msg {
    font-weight: 600;
    font-size: 15px;
    color: ${COLORS.ERROR};
    position: relative;
    top: 8px;
    left: 16px;
  }

  .submit-btn-box {
    button {
      width: 100%;
      height: 56px;
    }
  }
`;

export const EasyLogin = styled.div`
  height: 74px;
  background-color: ${COLORS.LIGHT_BLUE_100};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 23px;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;

  span {
    flex-grow: 1;
  }

  img {
    cursor: pointer;
    width: 42;
    height: 42;
  }
`;

export const LinkBlock = styled.div`
  text-align: center;

  a {
    text-decoration: underline;
    color: ${COLORS.BLUE};
  }
`;
