import { useRef } from "react";
import styled from "styled-components";
import { INPUT_MESSAGE } from "../../utils/constantsAddItem";
import { Label, RoundStyledButton } from "../Common/BasicStyledComponents";
import XIconActive from "../../assets/icon/ic_X_blue.svg";
import AddIcon from "../../assets/icon/ic_plus.svg";

const BigIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const Icon = styled.img`
  width: 22px;
  height: 24px;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const PositionedButton = styled(RoundStyledButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Card = styled.div`
  width: 282px;
  height: 282px;
  border-radius: 12px;
`;

const AddCard = styled(Card)`
  background-color: var(--cool-gray100);
  color: var(--cool-gray400);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 12px;

  &:hover {
    box-shadow: 0px 0px 5px var(--cool-gray500);
  }
`;

const ImgCard = styled(Card)`
  position: relative;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border: 1px solid var(--cool-gray50);
`;

const CardsContainer = styled.div`
  margin: 16px 0 23px;
  display: flex;
  gap: 24px;
`;

export function ImgInputWrapper({ name, value, onChange, onClick }) {
  const inputMessage = INPUT_MESSAGE[name];
  const inputRef = useRef();

  const handleImgDelete = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onClick();
  };

  return (
    <div>
      <Label>{inputMessage}</Label>

      <CardsContainer>
        <label htmlFor={name}>
          <AddCard>
            <BigIcon src={AddIcon} alt="추가" />
            <p>이미지 등록</p>
          </AddCard>
        </label>

        {value && (
          <ImgCard src={value}>
            <PositionedButton type="button" onClick={handleImgDelete}>
              <Icon src={XIconActive} alt="삭제" />
            </PositionedButton>
          </ImgCard>
        )}
      </CardsContainer>

      <HiddenFileInput
        id={name}
        type="file"
        accept="image/jpeg, image/png"
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
}
