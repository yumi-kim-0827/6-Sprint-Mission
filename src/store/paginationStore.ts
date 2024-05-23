import { create } from "zustand";

// 페이지네이션을 위한 전역상태들입니다.
// 페이지 버튼을 기준(currentPage)으로 계산하여 페이지를 렌더링 하도록 구현하였습니다.

interface CurrentPage {
  currentPage: number,
  setCurrentPage: (count:number) => void
}

export default create<CurrentPage>((set) => ({
  currentPage: 1,
  setCurrentPage: (count) => set({ currentPage: count }),
}));
