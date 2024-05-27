import * as S from "./Styles/TagStyles";

function Tag ({ tags, setTags }) {

  const handleDelete = (indexToRemove) => {
    const filter = tags.filter((ele, index) => index !== indexToRemove);
    setTags(filter)
  }
  return(
    <S.Wrapper>
      <S.Ul>
        {tags.map((tag, i) => (
          <S.Li key={i}>
            <S.TagSpan>{tag}</S.TagSpan>
            <S.CloseIconSpanContainer>
              <S.CloseIconSpan onClick={() => handleDelete(i)} />
            </S.CloseIconSpanContainer>
          </S.Li>
        ))}
      </S.Ul>
    </S.Wrapper>
  );
}

export default Tag;