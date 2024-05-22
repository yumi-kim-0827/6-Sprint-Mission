import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface PageContextInterface {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
}

const PageContext = createContext<PageContextInterface>({
  currentPage: 1,
  setCurrentPage: () => {},
  totalPages: 1,
  setTotalPages: () => {},
});

export function PageProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, totalPages, setTotalPages }}
    >
      {children}
    </PageContext.Provider>
  );
}

export function useCurrentPage() {
  const context = useContext(PageContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return context.currentPage;
}

export function useSetCurrentPage() {
  const context = useContext(PageContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return context.setCurrentPage;
}

export function useCurrentPageState(): [
  number,
  Dispatch<SetStateAction<number>>,
] {
  const context = useContext(PageContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return [context.currentPage, context.setCurrentPage];
}

export function useTotalPages() {
  const context = useContext(PageContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return context.totalPages;
}

export function useSetTotalPages() {
  const context = useContext(PageContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return context.setTotalPages;
}

export function useTotalPagesState(): [
  number,
  Dispatch<SetStateAction<number>>,
] {
  const context = useContext(PageContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return [context.currentPage, context.setCurrentPage];
}
