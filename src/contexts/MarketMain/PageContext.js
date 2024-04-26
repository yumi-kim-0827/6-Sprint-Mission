import { createContext, useContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
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

export function useCurrentPageState() {
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

export function useTotalPagesState() {
  const context = useContext(PageContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return [context.currentPage, context.setCurrentPage];
}
