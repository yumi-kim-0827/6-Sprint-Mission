import styled from "styled-components";
import Tag from "../Tag";

export default function TagList({ tagList, handleTagDelete }) {
  return (
    <StyledTagList>
      {[...tagList].reverse().map((tag) => (
        <Tag key={tag} onDelete={() => handleTagDelete(tag)}>
          {tag}
        </Tag>
      ))}
    </StyledTagList>
  );
}

const StyledTagList = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;
