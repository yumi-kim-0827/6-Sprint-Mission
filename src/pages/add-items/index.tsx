import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  MouseEvent,
} from "react";
import "./AddItems.css";
import fileplus from "../../assets/file-plus.png";
import tagdelete from "../../assets/tag-delete.png";
import { registerValidation } from "../../components/validations/validation";

interface Props {
  name: string;
  value: string | null;
  onChange: (name: string, value: File | null) => void;
}

function ProductImg({ name, value, onChange }: Props) {
  const [preview, setPreview] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const nextImg = e.target.files?.[0];
    if (nextImg) {
      onChange(name, nextImg);
    }
  };

  const handleClearClick = useCallback(() => {
    const inputNode = inputRef.current;
    if (inputNode) {
      inputNode.value = "";
      onChange(name, null);
    }
  }, [name, onChange]);

  useEffect(() => {
    if (!value) return;
    const blob = typeof value === "string" ? new Blob([value], { type: "text/plain" }) : value;

    const nextPreview = URL.createObjectURL(blob);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
    };
  }, [value]);

  return (
    <div className="product-img container">
      <h3>상품 이미지</h3>
      <div className="product-img">
        <input type="file" name="productImg" id="product-img-input" onChange={handleFileChange} ref={inputRef} />
        <label htmlFor="product-img-input">
          <img src={fileplus} alt="파일 이미지 선택" />
          <p>이미지 등록</p>
        </label>
        {value && (
          <div className="prev-img">
            <img src={preview} alt="파일 이미지 미리보기" />
            <button type="button" onClick={handleClearClick}>
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

interface ProductTagProps {
  name: string;
  onChange: (name: string, value: string) => void;
  clearProductTag: (arg0: string) => void;
}

function ProductTag({ name, onChange, clearProductTag }: ProductTagProps) {
  const [tagArr, setTagArr] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTagValue = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tag = e.target as HTMLInputElement;
      const tagValue = tag.value;
      if (tagValue !== "") {
        if (tagArr.includes(tagValue)) {
          alert("동일한 태그는 입력할 수 없습니다.");
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        } else {
          onChange(name, tagValue);
          const newTagArr = [...tagArr, tagValue];
          setTagArr(newTagArr);
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        }
      }
    }
  };

  const handleDeleteTag = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const parent = target.parentElement as HTMLElement;
    const tagValue = parent.innerText;
    const compareValue = tagValue.slice(2, tagValue.length);
    console.log(compareValue);
    const newTag = tagArr.filter((tag) => tag !== compareValue);
    setTagArr(newTag);
    clearProductTag(compareValue);
  };

  return (
    <div className="product-tag container">
      <h3>태그</h3>
      <label htmlFor="product-tag"></label>
      <input
        type="text"
        name={name}
        id="product-tag"
        onKeyDown={handleTagValue}
        placeholder="태그를 입력해주세요"
        ref={inputRef}
      />
      <div className="show-tag">
        {tagArr.map((tag) => {
          return (
            <p key={tag}>
              {`# ${tag}`}
              <img src={tagdelete} alt="태그 삭제 버튼" onClick={handleDeleteTag} />
            </p>
          );
        })}
      </div>
    </div>
  );
}

interface ProductValues {
  productName: string;
  productIntro: string;
  productPrice: string;
  productImg: string | null;
  productTag: string[];
}

const AddItems = () => {
  const [productValues, setProductValues] = useState<ProductValues>({
    productName: "",
    productIntro: "",
    productPrice: "",
    productImg: null,
    productTag: [],
  });
  const [isValidBtn, setIsValidBtn] = useState<boolean>(true);

  const handleChange = (name: string, value: string | File | null) => {
    setProductValues((prevProductValues) => {
      if (name === "productTag") {
        const newArr = [...prevProductValues.productTag, value instanceof File ? value.name : value];
        return {
          ...prevProductValues,
          productTag: newArr,
        } as ProductValues;
      } else {
        return {
          ...prevProductValues,
          [name]: value,
        } as ProductValues;
      }
    });
  };

  const clearProductTag = (value: string) => {
    setProductValues((prevProductValues) => {
      const updatedProductValues = prevProductValues.productTag.filter((tag) => tag !== value);
      return {
        ...prevProductValues,
        productTag: updatedProductValues,
      };
    });
  };

  const handleInputValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleTextAreaValuesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    const isValidInput = registerValidation({ ...productValues });
    setIsValidBtn(isValidInput);
  }, [productValues]);

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="product-form-top">
        <h2>상품 등록하기</h2>
        <button id="register-btn" className={isValidBtn ? "" : "active"} disabled={isValidBtn} type="submit">
          등록
        </button>
      </div>
      <ProductImg name="productImg" value={productValues.productImg} onChange={handleChange} />
      <div className="product-name container">
        <h3>상품명</h3>
        <label htmlFor="product-name"></label>
        <input
          name="productName"
          type="text"
          id="product-name"
          placeholder="상품명을 입력해주세요"
          onChange={handleInputValuesChange}
          value={productValues.productName}
        />
      </div>
      <div className="product-intro container">
        <h3>상품 소개</h3>
        <label htmlFor="product-intro"></label>
        <textarea
          name="productIntro"
          id="product-intro"
          placeholder="상품 소개를 입력해주세요"
          onChange={handleTextAreaValuesChange}
          value={productValues.productIntro}
        ></textarea>
      </div>
      <div className="product-price container">
        <h3>판매가격</h3>
        <label htmlFor="product-price"></label>
        <input
          name="productPrice"
          type="number"
          id="product-price"
          placeholder="판매 가격을 입력해주세요"
          onChange={handleInputValuesChange}
          value={productValues.productPrice}
        />
      </div>
      <ProductTag name="productTag" onChange={handleChange} clearProductTag={clearProductTag} />
    </form>
  );
};

export default AddItems;
