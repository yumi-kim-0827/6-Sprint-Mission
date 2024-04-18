export default function ProductForm() {
  return (
    <form action="post" className="mx-auto mb-40 mt-6 flex w-7/12 flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">상품 등록하기</h1>
        <button
          className="rounded-lg bg-[var(--cool-gray400)] px-7 py-3 text-white"
          disabled
        >
          등록
        </button>
      </div>
      <div className="mt-4 flex flex-col">
        <label htmlFor="image" className="text-lg font-bold">
          상품 이미지
        </label>
        <input
          type="file"
          id="image"
          name="image"
          placeholder="이미지를 업로드해주세요"
          accept="image/*"
          className="hidden"
          required
        />
        <label
          htmlFor="image"
          className="mt-3 flex h-72 w-72 cursor-pointer flex-col items-center justify-center rounded-xl bg-[var(--cool-gray100)] text-[var(--cool-gray400)]"
        >
          <p className="text-5xl">+</p>
          <p className="mt-3">이미지 등록</p>
        </label>
      </div>
      <div className="mt-6 flex flex-col">
        <label htmlFor="productName" className="text-lg font-bold">
          상품명
        </label>
        <input
          type="text"
          id="productName"
          name="productName"
          placeholder="상품명을 입력해주세요"
          className="mt-3 rounded-xl bg-[var(--cool-gray100)] py-4 pl-6"
          required
        />
      </div>
      <div className="mt-6 flex flex-col">
        <label htmlFor="productIntro" className="text-lg font-bold">
          상품 소개
        </label>
        <textarea
          type="text"
          id="productIntro"
          name="productIntro"
          placeholder="상품소개를 입력해주세요"
          className="mt-3 resize-none rounded-xl bg-[var(--cool-gray100)] pb-40 pl-6 pt-4"
          required
        ></textarea>
      </div>
      <div className="mt-6 flex flex-col">
        <label htmlFor="price" className="text-lg font-bold">
          판매가격
        </label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="판매 가격을 입력해주세요"
          className="mt-3 rounded-xl bg-[var(--cool-gray100)] py-4 pl-6"
          required
        />
      </div>
      <div className="mt-6 flex flex-col">
        <label htmlFor="tag" className="text-lg font-bold">
          태그
        </label>
        <input
          type="text"
          id="tag"
          name="tag"
          placeholder="태그를 입력해주세요"
          className="mt-3 rounded-xl bg-[var(--cool-gray100)] py-4 pl-6"
          required
        />
      </div>
    </form>
  );
}
