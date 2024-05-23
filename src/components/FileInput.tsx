import { MouseEvent, ChangeEvent, useEffect, useRef, useState } from 'react';
import './style/FileInput.css';
import DeleteButton from './DeleteButton';

interface Props {
  name: string;
  value: string | null;
  onChange: (name: string, value: File | null) => void;
}

export default function FileInput({ name, value, onChange }: Props) {
  const [preview, setPreview] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.files?.[0];
    if (nextValue) {
      onChange(name, nextValue);
    }
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const blob = typeof value === 'string' ? new Blob([value], { type: 'text/plain' }) : value;

    const nextPreview = URL.createObjectURL(blob);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  const onClickImageUpload = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    inputRef.current?.click();
  };
  return (
    <div className='file-input__container'>
      <p className='file-input__title'>상품 이미지</p>
      <div className='file-input__wrap'>
        <input
          type='file' //
          accept='image/png, image/jpeg'
          style={{ display: 'none' }}
          ref={inputRef}
          onChange={handleChange}
        />
        <button onClick={onClickImageUpload} className='file-input'>
          <span>이미지 등록</span>
        </button>
        {value && <img src={preview} alt='이미지 미리보기' className='preview-img' />}
        {value && <DeleteButton deleteItem={'preview'} onClick={handleClearClick} />}
      </div>
    </div>
  );
}
