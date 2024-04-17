const PhoneMenuBar = ({ order, orderChangeHandler }) => {
  return (
    <div className="ItemsList__menu_bar">
      <h1 className="ItemsList__menu_bar__title">전체 상품</h1>
      <div className={"ItemsList__menu_bar__right"}>
        <SearchBox />
        <div className="ItemsList__menu_bar__button_wrapper">
          <Button text={"상품 등록하기"} />
        </div>
        <DropdownOrder order={order} orderChangeHandler={orderChangeHandler} />
      </div>
    </div>
  );
};

export default PhoneMenuBar;
