import MakeItem from "./MakeItem";

function MakeItemList({ arr }) {
  return (
    <ul>
      {arr.list.map((item) => {
        return (
          <li>
            <MakeItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default MakeItemList;
