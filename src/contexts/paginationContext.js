import { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

export default function PaginationProvider({ children }) {
  const [page, setPage] = useState("1");
  return (
    <PaginationContext.Provider value={{ page, setPage }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error(
      "usePagination can be used inside PaginationContextProvider",
    );
  }

  return context;
}

// export default PageContext;
