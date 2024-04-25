import { Link } from "react-router-dom";
import { styled } from "styled-components";
import DefaultButton from "../../../../common/DefaultButton";

export const ProductDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 1200px;
  padding: 24px 0 32px 0;
  margin: 0 auto;
  border-bottom: 1px solid var(--input-background-color);
`;

export const ProductImage = styled.img`
  width: 486px;
  height: 486px;
  border-radius: 28.59px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionTitle = styled.h2`
  margin-bottom: 16px;
`;

export const Title = styled.h4`
  margin-bottom: 8px;
  color: #4b5563;
`;

export const DescriptionPrice = styled.p`
  font-size: 40px;
  font-weight: 600;
  line-height: 47.73px;
  margin-bottom: 16px;
`;

export const IntroduceContainer = styled.div`
  padding: 16px 0 23px 0;
  border-top: 1px solid var(--input-background-color);
`;

export const TagUl = styled.ul`
  display: flex;
  gap: 8px;
`;

export const TagLi = styled.li`
  height: 36px;
  padding: 6px 16px;
  border-radius: 26px;
  background-color: var(--input-background-color);
`;

export const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6.53px;
  width: 87px;
  height: 40px;
  padding: 4px 12px;
  border-radius: 35px;
  border: 1px solid var(--bottom-line);
`;

export const HeartCount = styled.h3`
  color: #6b5563;
`;

export const CommentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1200px;
  margin: 24px auto;
`;

export const InputTitle = styled.h4`
  align-self: flex-start;
`;

export const Input = styled.textarea`
  height: 104px;
  border-radius: 12px;
  padding: 16px 24px;
  background-color: var(--input-background-color);

  &::placeholder {
    color: var(--placeholder-color);
  }
`;

export const SubmitButton = styled(DefaultButton)`
  align-self: flex-end;
  background-color: var(--main-color);
  
  &:disabled {
    background-color: var(--placeholder-color);
  }
`;

export const InquireContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 24px;
`;

export const InquireDescription = styled.h3`
  color: var(--placeholder-color);
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-self: center;
`;

export const BackButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 48px;
  padding: 12px 71px;
  border-radius: 40px;
  background-color: var(--main-color);
`;