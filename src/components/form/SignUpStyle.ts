import styled from "styled-components";

export const AuthContainer = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  display: block;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const InputContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 16px 24px;
  background-color: #f3f4f6;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  line-height: 24px;
  width: 100%;

  &::placeholder {
    color: #9ca3af;
    font-size: 16px;
    line-height: 24px;
  }

  &:focus {
    outline-color: #3692ff;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 56px;
  border: 1px;
  border-radius: 40px;
  background: ${(props) => (props.disabled ? "#9ca3af" : "#3692ff")};
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  margin-top: 15px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const SocialLoginContainer = styled.div`
  background-color: #e6f2ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 23px;
  margin: 24px 0;
`;

export const SocialLoginText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const SocialLoginLinks = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
`;

export const NavigationText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

export const NavigationLink = styled.a`
  padding-left: 5px;
  color: #3182f6;
`;

export const ErrorText = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  padding-top: 5px;
  padding-left: 15px;
  color: red;
`;
