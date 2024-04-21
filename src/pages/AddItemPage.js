import { useState } from 'react';
import styles from '../styles/Button.module.css';
import styled from 'styled-components';
import FileInput from '../components/FileInput';

const ListHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputBox = styled.div`
  margin-bottom: 24px;

  h4 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 1.125rem;
  }
`;

const inputStyles = `
  border-radius: 12px;
  background-color: var(--gray100);
  border: 0px;
  width: 100%;
  height: 56px;
  padding: 20px;
`;

const Input = styled.input`
  ${inputStyles}
`;

const ContentInput = styled.textarea`
  ${inputStyles}
  min-height: 200px;
`;

function AddItemPage() {
  const [values, setValues] = useState({
    title: '',
    price: '',
    content: '',
    tags: '',
    imgFile: null,
  });

  // 모든 필수 입력값이 채워졌는지 확인하는 함수
  const isFormValid = () => {
    return values.title !== '' && values.price !== 0 && values.content !== '' && values.tags !== '';
  };

  // 버튼의 활성화 여부에 따라 disabled 상태 조절
  const buttonDisabled = !isFormValid();
  const buttonClass = buttonDisabled
    ? `${styles['btn-primary']} ${styles.roundedSm} ${styles.disabled}`
    : `${styles['btn-primary']} ${styles.roundedSm}`;

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addTagsList();
    }
  };

  const addTagsList = () => {
    return alert('hi');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ListHead>
        <h2>상품 등록하기</h2>
        <button type="submit" className={buttonClass} disabled={buttonDisabled}>
          등록
        </button>
      </ListHead>
      <InputBox>
        <h4>상품 이미지</h4>
        <FileInput value={values.imgFile} name="imgFile" onChange={handleChange} />
      </InputBox>
      <InputBox>
        <h4>상품명</h4>
        <Input
          type="text"
          value={values.title}
          name="title"
          placeholder="상품명을 입력해주세요"
          onChange={handleInputChange}
        />
      </InputBox>
      <InputBox>
        <h4>상품 소개</h4>
        <ContentInput
          type="text"
          value={values.content}
          name="content"
          placeholder="상품 소개를 입력해주세요"
          onChange={handleInputChange}
        />
      </InputBox>
      <InputBox>
        <h4>판매 가격</h4>
        <Input
          type="number"
          value={values.price}
          name="price"
          placeholder="판매 가격을 입력해주세요"
          onChange={handleInputChange}
        />
      </InputBox>
      <InputBox>
        <h4>태그</h4>
        <Input
          type="text"
          value={values.tags}
          name="tags"
          placeholder="태그를 입력해주세요"
          onChange={handleInputChange}
          onKeyDown={handleEnter}
        />
      </InputBox>
    </form>
  );
}

export default AddItemPage;
