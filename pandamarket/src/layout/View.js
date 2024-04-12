import { useState } from "react";
import { ViewItemList } from "../view/ViewItemList";
import { Desktop, Mobile, Tablet } from "../common/responsive";

export function View (){
  const [order, setOrder] = useState("recent");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <div className="view">
      <section className="section-items best">
        <div className="section-wrap">
          <header className="section-header">
            <h2 className="section-tit">베스트 상품</h2>
          </header>
          <div className="section-content">
            <Desktop><ViewItemList order="favorite" size="4"/></Desktop>
            <Tablet><ViewItemList order="favorite" size="2"/></Tablet>
            <Mobile><ViewItemList order="favorite" size="1"/></Mobile>
          </div>
        </div>
      </section>
      <section className="section-items">
        <div className="section-wrap">
          <header className="section-header">
            <h2 className="section-tit">전체 상품</h2>
            <input type="text" value={search} onChange={handleSearch}/>
          </header>
          <div className="section-content">
            <Desktop><ViewItemList order="recent" size="10" keyword={search}/></Desktop>
            <Tablet><ViewItemList order="recent" size="6" keyword={search}/></Tablet>
            <Mobile><ViewItemList order="recent" size="4" keyword={search}/></Mobile>
          </div>
        </div>
      </section>
    </div>
  );
}