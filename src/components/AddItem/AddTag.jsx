import styled from "styled-components";
import close_icon from "../../assets/images/icon/ic_close_black.svg";

const AddTag = ({ tags, setTags }) => {
  const removeTags = (indexToRemove) => {
    const filter = tags.filter((el, index) => index !== indexToRemove);
    setTags(filter);
  };

  const addTags = (event) => {
    const inputVal = event.target.value;
    if (event.key === "Enter" && inputVal !== "" && !tags.includes(inputVal)) {
      setTags([...tags, inputVal]);
      event.target.value = "";
    }
  };

  return (
    <div className="add_tag">
      <span className="add_tag_title">태그</span>
      <TagsInput
        className="tag-input"
        type="text"
        onKeyUp={(e) => {
          addTags(e);
        }}
        placeholder="태그를 입력해주세요"
      />

      <Tags id="tags">
        {tags.map((tag, index) => (
          <Tag key={index}>
            <span className="tag-title">{tag}</span>
            <CloseIcon src={close_icon} onClick={() => removeTags(index)} />
          </Tag>
        ))}
      </Tags>
    </div>
  );
};

const TagsInput = styled.input`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: #f3f4f6;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;

  &:focus {
    outline: 1px solid #3692ff;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

const Tag = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  padding: 12px 12px 12px 16px;
  font-size: 14px;
  list-style: none;
  border-radius: 15px;
  margin: 0 4px 4px 4px;
  background: var(--gray-50);
`;

const CloseIcon = styled.img`
  display: inline-block;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
`;

export default AddTag;
