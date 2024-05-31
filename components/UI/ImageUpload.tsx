import { ChangeEvent, useState } from "react";
import { Label } from "./InputItem";
import { ReactComponent as PlusIcon } from "../../assets/images/icons/ic_plus.svg";
import style from "./ImageUpload.module.scss";
import DeleteButton from "./DeleteButton";
import Image from "next/image";

interface ImageUploadProps {
  title: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ title }) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Optional chaining을 사용해 선택된 파일이 있을 경우에만 접근하도록 안전하게 처리

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviewUrl(imageUrl);
    }
  };

  const handleDelete = () => {
    setImagePreviewUrl("");
  };

  return (
    <div>
      {title && <Label>{title}</Label>}

      <div className={style.image_upload_container}>
        <label className={style.upload_button} htmlFor="image-upload">
          <PlusIcon />
          이미지 등록
        </label>

        <input
          id="image-upload"
          className={style.hidden_file_input}
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />

        {imagePreviewUrl && (
          <div className={style.image_preview}>
            <Image fill src={imagePreviewUrl} alt={title} />
            <div className={style.delete_button_wrapper}>
              <DeleteButton onClick={handleDelete} label="이미지 파일" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
