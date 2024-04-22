import { AllItemsList, Navbar, RankedItems } from "../components";

// 데이터를 react-query를 이용하여 동일한 데이터의 재접근 속도를 높였습니다.
export default function Items() {
  // 네비게이션바 + 베스트 상품 + 전체 상품으로 컴포넌트를 나누었습니다.
  return (
    <>
      <Navbar />
      <main>
        <div className="mx-4 my-6 flex flex-col items-center">
          <RankedItems />
          <AllItemsList />
        </div>
      </main>
    </>
  );
}
