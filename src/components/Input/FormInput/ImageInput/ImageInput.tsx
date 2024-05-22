import { useEffect, useRef, useState } from "react";
import PlusIcon from "assets/icon/ic_plus.svg";
import * as S from "./ImageInput.style";

interface ImageInputProps {
  name: string;
  value: Blob | null;
  onChange: any;
}

export default function ImageInput({ name, value, onChange }: ImageInputProps) {
  const [preview, setPreview] = useState("");
  const imgFileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    imgFileRef.current?.click();
  };

  const handleImgFileDelete = () => {
    const inputNode = imgFileRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange({ target: { name: "img-file", files: [null] } });
  };

  useEffect(() => {
    if (!value) return;

    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview("");
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <S.ImageInputContainer>
      <S.ImageInput onClick={handleClick}>
        <input
          name={name}
          onChange={onChange}
          ref={imgFileRef}
          type="file"
          accept="image/png, image/jpeg"
        />
        <img src={PlusIcon} alt="img-file" />
        <h1>이미지 등록</h1>
      </S.ImageInput>
      {preview && <PreviewImage url={preview} onDelete={handleImgFileDelete} />}
    </S.ImageInputContainer>
  );
}

interface PreviewImageProps {
  url: string;
  onDelete: () => void;
}

function PreviewImage({ url, onDelete }: PreviewImageProps) {
  return (
    <S.PreviewImage>
      <img src={url} alt="img-file" />
      <S.StyledXIcon onClick={onDelete} />
    </S.PreviewImage>
  );
}
