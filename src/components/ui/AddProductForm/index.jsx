import AddProductImageContainer from "../../container/AddProductImageContainer";
import Button from "../Button";
import Input from "../Input";
import InputTag from "../InputTag";
import Textarea from "../Textarea";
import styles from "./styles.module.css";

function AddProductForm({
  collectedInfo,
  tags,
  handleInputChange,
  handleTagInputChange,
  handleKeyUp,
  handleDelete,
  inputTagValue,
}) {
  const { name, introduction, price } = collectedInfo;

  return (
    <div className={styles.layout}>
      <div className={styles.buttonAligner}>
        <h2 className={styles.subHeading}>상품 등록하기</h2>
        <Button
          type="button"
          className="button"
          isDisabled={!(name && introduction && price && tags.length)}
        >
          등록
        </Button>
      </div>
      <div>
        <form className={styles.formLayout}>
          <div>
            <label className={styles.label}>상품 이미지</label>
            <AddProductImageContainer />
          </div>
          <div>
            <label htmlFor="name" className={styles.label}>
              상품명
            </label>
            <Input
              className="input"
              id="name"
              placeholder="상품명을 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="introduction" className={styles.label}>
              상품 소개
            </label>
            <Textarea
              className="addProductPage"
              id="introduction"
              placeholder="상품 소개를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="price" className={styles.label}>
              판매 가격
            </label>
            <Input
              className="input"
              id="price"
              placeholder="판매 가격을 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="tags" className={styles.label}>
              태그
            </label>
            <InputTag
              id="tags"
              placeholder="태그를 입력해주세요"
              onKeyUp={handleKeyUp}
              onDelete={handleDelete}
              onChange={handleTagInputChange}
              tags={tags}
              value={inputTagValue}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;
