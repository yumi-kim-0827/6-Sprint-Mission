import React from "react";
import Items from "./itmes";
import ProductMenu from "./ProductMenu";

function App() {
  return (
    <div>
      <Items />
      <ProductMenu title={"베스트 상품"} />
      <ProductMenu title={"베스트 상품"} button />
    </div>
  );
}

export default App;
