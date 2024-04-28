import { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";
import { SearchText } from "../components/SearchText";
import { Select } from "../components/Select";
import { useResponsive } from "../hooks/useResponsive";
import { Link, useSearchParams } from "react-router-dom";

export function ItemPage (){
  const [isPC, isTablet, isMobile] = useResponsive();
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword") || "";

  const [values, setValues] = useState({
    search : initKeyword,
    order : "recent",
    page : 1
  });
  const [isPopDropdown, setPopState] = useState(false);
  const sortOptions = [
    { value: "recent", name: "최신순" },
    { value: "favorite", name: "좋아요순" },
  ];

  const handlePop = (e) => {
    let {name, value} = e.target;

    setPopState(!isPopDropdown);
    handleChange(name, value);
  }

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name] : value,
    }))
  }
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    handleChange(name, value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams( values.search ? {keyword : values.search} : {})
  }

  return (
    <>
      <section className="section-items best">
        <div className="section-wrap">
          <header className="section-header">
            <h2 className="section-tit">베스트 상품</h2>
          </header>
          <div className="section-content">
            {isPC && <ItemList order="favorite" size="4"/>}
            {isTablet && <ItemList order="favorite" size="2"/>}
            {isMobile &&<ItemList order="favorite" size="1"/>}
          </div>
        </div>
      </section>
      <section className="section-items">
        <div className="section-wrap">
          <header className="section-header">
            <h2 className="section-tit">전체 상품</h2>
            <SearchText name="search" value={values.search} onSubmit={handleSearch} onChange={handleInputChange} className="section-item__search"/>
            <Link to="/additem" className="btn-small section-item__btn">상품 등록하기</Link>
            <Select isShow={isPopDropdown} selectOptions={sortOptions} name="order" value={values.order} onPop={setPopState} onClick={handlePop} onChange={handleChange}  className="section-item__dropdown"></Select>
          </header>
          <div className="section-content">
            {isPC && <ItemList order={values.order} size="10" keyword={values.search} page={values.page}/>}
            {isTablet && <ItemList order={values.order} size="6" keyword={values.search} page={values.page}/>}
            {isMobile && <ItemList order={values.order} size="4" keyword={values.search} page={values.page}/>}
          </div>
        </div>
      </section>
    </>
  );
}