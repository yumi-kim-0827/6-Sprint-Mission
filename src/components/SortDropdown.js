import { sortProductsByDate, sortProductsByLike } from "../utils/sortUtils";

export default function SortDropdown({
  setAllProducts,
  setSortContent,
  allProducts,
  sortOptions,
}) {
  // props를 받아 구현하였습니다.
  const handleDateSort = () => {
    const sortedProducts = sortProductsByDate(allProducts);
    setAllProducts(sortedProducts);
    setSortContent(sortOptions.NEWEST);
  };

  const handleLikeSort = () => {
    const sortedProducts = sortProductsByLike(allProducts);
    setAllProducts(sortedProducts);
    setSortContent(sortOptions.LIKE);
  };

  return (
    <ul className="absolute right-1 top-12 w-32 rounded-xl border bg-white text-center sm:left-0 sm:top-14">
      <li className="cursor-pointer border-b py-2" onClick={handleDateSort}>
        최신순
      </li>
      <li className="cursor-pointer py-2" onClick={handleLikeSort}>
        좋아요순
      </li>
    </ul>
  );
}
