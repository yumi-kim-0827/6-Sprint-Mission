import { useRef } from 'react';
import styled from 'styled-components';

const StyledFileInput = styled.input`
  border-radius: 12px;
  background-color: var(--gray100);
  border: 0px;
  width: auto;
  padding: 20px;
`;

function FileInput({ name, value, onChange }) {
  // 파일 입력 요소에 대한 실제 HTML DOM 요소에 접근할 수 있는 참조 생성
  const inputRef = useRef();

  // input 요소의 변경 이벤트 핸들러
  const handleChange = (e) => {
    // 선택한 파일 객체를 nextValue에 할당
    const nextValue = e.target.files[0];
    // 선택한 파일 객체를 value 상태에 설정
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;

    // inputNode 값이 없는 경우 함수 종료
    if (!inputNode) return;

    // inputNode 값을 빈 문자열로 지정해서 초기화
    inputNode.value = '';
    // 부모 컴포넌트에서 imgFile 값이 null로 변경
    onChange(name, null);
  };

  return (
    <>
      {/* 파일 입력 요소를 렌더링하고, 파일이 변경될 때 handleChange 함수 호출 */}
      <StyledFileInput type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>X</button>}
    </>
  );
}

export default FileInput;
