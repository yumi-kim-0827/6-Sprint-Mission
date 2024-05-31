function AddItem() {
  return (
    <>
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-between">
          <span className="text-[28px] font-[700]">상품 등록 하기</span>
          <button className="text-[16px] font-[600]">등록</button>
        </div>
        <div className="text-[18px] font-[700]">삽입 이미지</div>
        <input type="file" placeholder="이미지 등록" />
        <div className="text-[18px] font-[700]">상품명</div>
        <input
          className="flex-none max-w-[1200px] min-w-[344px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md"
          placeholder="상품명을 입력해주세요"
        />
        <div className="text-[18px] font-[700]">상품 소개</div>
        <textarea
          className="flex-none max-w-[1200px] min-w-[344px] h-[200px] p-[10px] bg-[var(--gray100)] rounded-md outline-none whitespace-normal resize-none"
          placeholder="상품 소개를 입력해주세요"
        />
        <div className="text-[18px] font-[700]">판매가격</div>
        <input
          className="flex-none max-w-[1200px] min-w-[344px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md"
          type="number"
          placeholder="판매 가격을 입력해주세요"
        />
        <div className="text-[18px] font-[700]">태그</div>
        <input
          className="flex-none max-w-[1200px] min-w-[344px] h-[42px] p-[10px] bg-[var(--gray100)] rounded-md"
          placeholder="태그를 입력해주세요"
        />
      </div>
    </>
  );
}

export default AddItem;
