import "./AddItem.css";
import { ReactComponent as PlusIcon } from "../../assets/images/icon/ic_plus.svg";

const AddItem = () => {
  return (
    <>
      <main className="add_main_container">
        <form className="add_form" action="">
          <div className="add_top">
            <span className="add_top_title">상품 등록하기</span>
            <button type="submit" className="add_top_btn">
              등록
            </button>
          </div>
          <div className="add_image">
            <label className="add_image_title" htmlFor="">
              상품 이미지
            </label>
            <div className="add_image_wrap">
              <button className="add_image_input">
                <PlusIcon className="plus" />
                <span className="placeholder">이미지 등록</span>
              </button>
              <button className="add_image_input"></button>
            </div>
          </div>
          <div className="add_name">
            <label className="add_name_title" htmlFor="">
              상품명
            </label>
            <input
              className="add_name_input"
              type="text"
              placeholder="상품명을 입력해주세요"
            />
          </div>
          <div className="add_description">
            <label className="add_description_title" htmlFor="">
              상품 소개
            </label>
            <textarea
              className="add_description_input"
              placeholder="상품 소개를 입력해주세요"
            />
          </div>
          <div className="add_price">
            <label className="add_price_title" htmlFor="">
              판매 가격
            </label>
            <input
              className="add_price_input"
              type="text"
              placeholder="판매 가격을 입력해주세요"
            />
          </div>
          <div className="add_tag">
            <label className="add_tag_title" htmlFor="">
              태그
            </label>
            <input
              className="add_tag_input"
              type="text"
              placeholder="태그를 입력해주세요"
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default AddItem;
