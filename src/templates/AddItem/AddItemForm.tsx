import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { removeCommas } from "utils/commas";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { TagList } from "components/Tag";
import { Tag } from "components/Tag";
import * as S from "./AddItemForm.style";

export default function AddItemForm() {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [currentTag, setCurrentTag] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
    if (name === "price") setPrice(Number(removeCommas(e.target.value)));
    if (name === "tags") setCurrentTag(value);
  };

  const onImageChange = (file: File | null) => {
    setImgFile(file);
  };

  const handleTagKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || e.currentTarget.value.trim() === "") return;
    if (tagList.includes(currentTag)) {
      alert("같은 태그가 있습니다");
      return;
    }
    setTagList((prev) => [...prev, currentTag]);
    setCurrentTag("");
  };

  const handleTagDelete = (tagToDelete: string) => {
    setTagList((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  useEffect(() => {
    if (
      title !== "" &&
      description !== "" &&
      price !== 0 &&
      tagList.length > 0 &&
      imgFile !== null
    ) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [title, description, price, tagList, imgFile]);

  return (
    <S.AddItemContainer>
      <S.AddItemHeader>
        <h1>상품 등록하기</h1>
        <Button.Submit isActive={isActive}>등록</Button.Submit>
      </S.AddItemHeader>

      <S.AddItemForm>
        <div className="form__image">
          <h1>상품 이미지</h1>
          <Input.Form.Image name="img-file" onImageChange={onImageChange} />
        </div>

        <div className="form__productName">
          <h1>상품명</h1>
          <Input.Form
            name="title"
            placeholder="상품명을 입력해주세요"
            value={title}
            onChange={onChange}
          />
        </div>

        <div className="form__description">
          <h1>상품 소개</h1>
          <Input.Form.Textarea
            name="description"
            placeholder="상품 소개를 입력해주세요"
            value={description}
            onChange={onChange}
          />
        </div>

        <div className="form__price">
          <h1>판매 가격</h1>
          <Input.Form.Number
            name="price"
            placeholder="판매 가격을 입력해주세요"
            value={price}
            onChange={onChange}
          />
        </div>

        <div className="form__tags">
          <h1>태그</h1>
          <Input.Form.Tag
            name="tags"
            placeholder="태그를 입력해주세요"
            value={currentTag}
            onChange={onChange}
            onKeyUp={handleTagKeyUp}
          />
          <TagList>
            {[...tagList].reverse().map((tag) => (
              <Tag key={tag} onDelete={() => handleTagDelete(tag)}>
                {tag}
              </Tag>
            ))}
          </TagList>
        </div>
      </S.AddItemForm>
    </S.AddItemContainer>
  );
}
