function DropdownSort({ handleSortOption }) {
  return (
    <div className="dropdown-list">
      <div
        className="dropdown-option"
        onClick={() => handleSortOption("recent")}
      >
        최신순
      </div>
      <div
        className="dropdown-option"
        onClick={() => handleSortOption("favorite")}
      >
        좋아요순
      </div>
    </div>
  );
}

export default DropdownSort;
