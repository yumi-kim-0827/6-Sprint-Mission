import "../css/DropdownItem.css";

function DropdownItem({ onClick, position, value, label }) {
  let classList = "all-items__order-option ";

  if (position === "top") {
    classList += "all-items__order-option--top";
  } else if (position === "bottom") {
    classList += "all-items__order-option--bottom";
  }

  return (
    <button className={classList} onClick={() => onClick(value)}>
      {label}
    </button>
  );
}

export default DropdownItem;
