import { ChangeEvent, useState, KeyboardEvent, FormEvent } from "react";
import ProductImageInput from "./ProductImageInput";
import ProductInfoInput from "./ProductInfoInput";
import deleteTagButton from "image/ic_X_for_tag.png";
import "./additemForm.css";
import ProductTagInput from "./ProductTagInput";
import ProductDescribeInput from "./ProductDescribeInput";

interface ProductInfoType {
  images: File | null;
  name: string;
  description: string;
  price: string;
  tags: string[];
}

interface TagListElementProps {
  tag: string;
  onDelete: (targetTag: string) => void;
}

const TagListElement = ({ tag, onDelete }: TagListElementProps) => {
  const handleDeleteTag = () => {
    onDelete(tag);
  };
  return (
    <div className="tag-element">
      <span>{tag}</span>
      <img
        src={deleteTagButton}
        onClick={handleDeleteTag}
        alt="태그 삭제 버튼"
      />
    </div>
  );
};

interface AddItemFormProps {
  values: ProductInfoType;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  upLoadImg: (e: ChangeEvent<HTMLInputElement>) => void;
  cancelUPLoadImg: () => void;
  addTagList: (tag: string) => void;
  deleteTagList: (targetTag: string) => void;
}

const AddItemForm = ({
  values,
  onChange,
  upLoadImg,
  cancelUPLoadImg,
  addTagList,
  deleteTagList,
}: AddItemFormProps) => {
  const [tag, setTag] = useState("");

  //태그 onChange
  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  // 태그 onSubmit
  const handleEnterOneTag = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTagList(tag);
    setTag("");
  };
  // 태그 스페이스비 누르면 입력
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " ") {
      addTagList(tag);
      setTag("");
    }
  };

  return (
    <div className="additem-form">
      <ProductImageInput
        value={values.images}
        onChange={upLoadImg}
        onDelete={cancelUPLoadImg}
      />
      <ProductInfoInput
        label="상품명"
        id="ProductName"
        name="name"
        placeholder="상품명을 입력해주세요"
        value={values.name}
        onChange={onChange}
        type="text"
      />
      <ProductDescribeInput
        label="상품 소개"
        id="ProductDescription"
        name="description"
        placeholder="상품 소개를 입력해주세요"
        value={values.description}
        onChange={onChange}
      />
      <ProductInfoInput
        label="판매 가격"
        id="ProductPrice"
        name="price"
        placeholder="판매 가격을 입력해주세요"
        value={values.price}
        onChange={onChange}
        type="number"
      />
      <ProductTagInput
        label="태그"
        id="ProductTag"
        name="tags"
        placeholder="태그를 입력해주세요"
        value={tag}
        onChange={handleTagChange}
        onSubmit={handleEnterOneTag}
        onKeyDown={handleKeyDown}
      />
      <div className="tag-list-section">
        {values.tags.map((tag) => (
          <TagListElement key={tag} tag={tag} onDelete={deleteTagList} />
        ))}
      </div>
    </div>
  );
};

export default AddItemForm;
