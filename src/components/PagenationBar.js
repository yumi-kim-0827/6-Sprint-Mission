import leftArrow from "../assets/images/icons/arrow_left.svg";
import rightArrow from "../assets/images/icons/arrow_right.svg";

const PagenationBar = () => {
  return (
    <div className="PagenationBar">
      <button>
        <img src={leftArrow} alt="leftArrow" />
      </button>
      <button>1234</button>
      <button>
        <img src={rightArrow} alt="rightArrow" />
      </button>
    </div>
  );
};

export default PagenationBar;
