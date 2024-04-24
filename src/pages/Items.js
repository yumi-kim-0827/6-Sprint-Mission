import { useEffect, useState } from "react";
import AllProducts from "../components/AllProducts";
import BestProducts from "../components/BestProducts";
import "./Items.css";
import { getBestProducts, getAllProducts } from "../api";
import leftArrow from "../assets/arrow_left.png";
import rightArrow from "../assets/arrow_right.png";

function Items() {
  const [bestItems, setBestItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const [allPage, setAllPage] = useState(1);

  const handleBestLoad = async (options) => {
    const { list } = await getBestProducts(options);
    setBestItems(list);
  };

  const handleAllLoad = async (options) => {
    const { list } = await getAllProducts(options);
    if (options.allPage === 1) {
      setAllItems(list);
    } else {
      setAllItems([...list]);
    }
  };

  const handleOnClick = (e) => {
    const pageNumber = Number(e.target.value);
    setAllPage(pageNumber);
    handleAllLoad({ allPage });
  };

  useEffect(() => {
    handleBestLoad({ page: 1, pageSize: 4, orderBy: "favorite" });
    handleAllLoad({ allPage, pageSize: 10, orderBy: "recent" });
  }, [allPage]);

  return (
    <div className='items'>
      <BestProducts items={bestItems} />
      <AllProducts items={allItems} />
      <div className='page-button-container'>
        <button>
          <img src={leftArrow} alt='이전 버튼' />
        </button>
        <button value={1} onClick={handleOnClick}>
          1
        </button>
        <button value={2} onClick={handleOnClick}>
          2
        </button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <img src={rightArrow} alt='다음 버튼' />
        </button>
      </div>
    </div>
  );
}

export default Items;
