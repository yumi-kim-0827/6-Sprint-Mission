import { useEffect, useRef, useState } from "react";

import Close from "../assets/icons/ic_close.png";

interface Props {
  // 매개변수로 받은 props 정의
  name: string;
  value: File | null;
  onChange: (name: string, value: File | null) => void;
}

export default function FileInput(props: Props) {
  const [previewImg, setPreviewImg] = useState<string>(""); // 파일 미리보기 주소를 문자열로 저장
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // HTMLInputElement의 files 속성은 FileList | null 타입
    // Optional chaining을 사용하여 files가 null이 아닌 경우에만 접근합니다.
    const selectImg = e.target.files;
    if (!selectImg || selectImg.length === 0) return;

    const nextValue = selectImg[0];
    props.onChange(props.name, nextValue);
  };

  const handleDelete = () => {
    const currentImg = inputRef.current;
    if (!currentImg) return;

    currentImg.value = "";
    props.onChange(props.name, null);
  };

  useEffect(() => {
    if (!props.value) return;

    const nextPreviewImg = URL.createObjectURL(props.value);
    setPreviewImg(nextPreviewImg);

    return () => {
      setPreviewImg(""); // preview State값 초기화
      URL.revokeObjectURL(nextPreviewImg); // 앞에서 만든 ObjectURL을 해제
    };
  }, [props.value]); // 파일을 선택할 때마다 미리보기 주소 변경

  return (
    <div className="img_add_wrapper">
      <input
        type="file"
        accept="images/png, images/jpeg"
        placeholder="이미지 등록"
        onChange={handleChange}
        ref={inputRef}
        className="img_add_input"
      />
      <div className="preview_img_wrapper">
        {props.value && (
          <img src={previewImg} alt="미리보기 이미지" className="preview_img" />
        )}
        {props.value && (
          <button onClick={handleDelete} className="img_delete_button">
            <img src={Close} alt="닫기" />
          </button>
        )}
      </div>
    </div>
  );
}
