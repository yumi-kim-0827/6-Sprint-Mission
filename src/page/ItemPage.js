import { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";
import { Desktop, Mobile, Tablet } from "../common/responsive";
import { SearchText } from "../components/SearchText";
import { SmallButton } from "../components/SmallButton";
import { DropDown } from "../components/DropDown";

export function ItemPage (){
  const [values, setValues] = useState({
    search : "",
    order : "recent",
    page : 1
  });
  const [popDropdown, setPopState] = useState(false);
  
  const handlePop = (e) => {
    let {name, value} = e.target;

    setPopState(!popDropdown);
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

  return (
    <>
      <section className="section-items best">
        <div className="section-wrap">
          <header className="section-header">
            <h2 className="section-tit">베스트 상품</h2>
          </header>
          <div className="section-content">
            <Desktop><ItemList order="favorite" size="4"/></Desktop>
            <Tablet><ItemList order="favorite" size="2"/></Tablet>
            <Mobile><ItemList order="favorite" size="1"/></Mobile>
          </div>
        </div>
      </section>
      <section className="section-items">
        <div className="section-wrap">
          <header className="section-header">
            <h2 className="section-tit">전체 상품</h2>
            <SearchText name="search" value={values.search} onChange={handleInputChange} className="section-item__search"/>
            <SmallButton className="section-item__btn">상품 등록하기</SmallButton>
            <DropDown state={popDropdown} name="order" value={values.order} onPop={setPopState} onClick={handlePop} onChange={handleChange}  className="section-item__dropdown"></DropDown>
          </header>
          <div className="section-content">
            <Desktop><ItemList order={values.order} size="10" keyword={values.search} page={values.page}/></Desktop>
            <Tablet><ItemList order={values.order} size="6" keyword={values.search} page={values.page}/></Tablet>
            <Mobile><ItemList order={values.order} size="4" keyword={values.search} page={values.page}/></Mobile>
          </div>
        </div>
      </section>
    </>
  );
}