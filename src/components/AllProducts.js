import "./AllProducts.css";
import searchIcon from "../assets/ic_search.png";
import arrowIcon from "../assets/ic_arrow_down.png";
import Card from "./Card";
import { Link } from "react-router-dom";

function AllProducts({ items }) {
  const sliceEnd = 5;
  const topItems = items.slice(0, sliceEnd);
  const underItems = items.slice(sliceEnd);

  return (
    <div className='all-products'>
      <div className='all-products-header'>
        <h1>전체 상품</h1>
        <div className='all-products-nav'>
          <form className='search-form'>
            <button className='search-button'>
              <img src={searchIcon} alt='검색 아이콘' />
            </button>
            <input
              className='search-input'
              type='text'
              placeholder='검색할 상품을 입력해주세요'
            />
          </form>
          <div className='order-lists'>
            <Link to='/items/addItem'>
              <button className='add-item-button'>
                <span>상품 등록하기</span>
              </button>
            </Link>
            <ul className='order-list'>
              <li className='order-recent'>
                <span>최신순</span>
                <img
                  className='order-button'
                  src={arrowIcon}
                  alt='화살표 아이콘'
                />
              </li>
              <ul className='order-menus'>
                <li className='menu-recent'>최신순</li>
                <li className='menu-favorite'>좋아요순</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div className='all-products-contents'>
        <ul className='all-products-wrap'>
          {topItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ul>
        <ul className='all-products-wrap'>
          {underItems.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllProducts;
