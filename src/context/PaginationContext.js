import { createContext, useContext } from "react";
import { useState } from "react";

const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const [page, setPage] = useState(1);

  return (
    <PaginationContext.Provider value={{ page, setPage }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePage() {
  const { page } = useContext(PaginationContext);

  return page;
}

export function useSetPage() {
  const { setPage } = useContext(PaginationContext);

  return setPage;
}
