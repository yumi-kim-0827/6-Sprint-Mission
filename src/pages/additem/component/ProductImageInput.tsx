import { useRef, useState, useEffect, ChangeEvent } from "react";
import plusIcon from "image/ic_plus.png";
import deleteImgButton from "image/ic_X_for_img.png";
interface Props {
  value: File | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
}
const ProductImageInput = ({ value, onChange, onDelete }: Props) => {
  const [preview, setPreview] = useState<string | undefined>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);

    return () => {
      setPreview(undefined);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = "";
    onDelete();
  };

  return (
    <div className="image-input additem-input">
      <label>상품 이미지</label>
      <div className="image-input-content">
        <label htmlFor="productImage">
          <div className="btn-upload">
            <img src={plusIcon} alt="플러스 버튼" />
            <span>이미지 등록</span>
          </div>
        </label>
        <input
          id="productImage"
          type="file"
          name="images"
          ref={inputRef}
          accept="image/png, image/jpeg"
          onChange={onChange}
        />
        {value && (
          <div className="image-preview-section">
            <img
              src={preview}
              alt="이미지 미리보기"
              className="image-preview"
            />
            <img
              src={deleteImgButton}
              alt="이미지 삭제"
              className="image-preview-delete-button"
              onClick={handleClearClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImageInput;
