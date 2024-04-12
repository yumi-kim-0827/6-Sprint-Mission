export default function SortDropdown({
  sortProductsByDate,
  sortProductsByLike,
  allProducts,
}) {
  const handleDateSort = () => {
    sortProductsByDate(allProducts);
  };

  const handleLikeSort = () => {
    sortProductsByLike(allProducts);
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
