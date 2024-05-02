import styled from "styled-components";

import FlexContainer from "../styled-components/FlexContainer";
import { InputContainer } from "./Input";
import Tag from "./Tag";

const TagsContainer = styled(FlexContainer)`
  height: 42px;
  margin-top: 12px;
`;

function InputTag({ id, label, placeholder, onKeyUp, onDelete, tags }) {
  return (
    <div>
      <InputContainer
        id={id}
        label={label}
        placeholder={placeholder}
        onKeyUp={onKeyUp}
      />
      <TagsContainer $justifyContent="normal" $gap="12px">
        {tags &&
          tags.map((tag) => {
            return <Tag tag={tag} key={tag} onDelete={onDelete} />;
          })}
      </TagsContainer>
    </div>
  );
}

export default InputTag;
