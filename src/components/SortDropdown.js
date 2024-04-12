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
    <ul className="absolute sm:top-14 sm:left-0 top-12 right-1 border rounded-xl text-center w-32 bg-white">
      <li className="border-b cursor-pointer py-2" onClick={handleDateSort}>
        최신순
      </li>
      <li className="cursor-pointer py-2" onClick={handleLikeSort}>
        좋아요순
      </li>
    </ul>
  );
}
