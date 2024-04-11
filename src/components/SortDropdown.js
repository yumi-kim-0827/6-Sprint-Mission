export default function SortDropdown() {
  return (
    <ul className="absolute sm:top-14 sm:left-0 top-12 right-1 border rounded-xl text-center w-32 bg-white">
      <li className="border-b cursor-pointer py-2 ">최신순</li>
      <li className="cursor-pointer py-2">좋아요순</li>
    </ul>
  );
}
