function DropdownList() {
  return (
    <div className="absolute w-[100px] h-[100px] bg-[var(--gray50)]">
      <button className="hover:bg-[var(--gray200)]">최신순</button>
      <button className="hover:bg-[var(--gray200)]">좋아요 순</button>
    </div>
  );
}

export default DropdownList;
