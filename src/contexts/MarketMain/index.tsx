import { ReactNode } from "react";
import { OrderProvider } from "./OrderContext";
import { PageProvider } from "./PageContext";
export {
  useCurrentPage,
  useSetCurrentPage,
  useCurrentPageState,
  useTotalPages,
  useSetTotalPages,
  useTotalPagesState,
} from "./PageContext";
export { useOrder, useSetOrder, useOrderState } from "./OrderContext";

export default function MarketMainProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PageProvider>
      <OrderProvider>{children}</OrderProvider>
    </PageProvider>
  );
}
