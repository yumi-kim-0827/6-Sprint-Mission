import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [order, setOrder] = useState("최신순");

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return context.order;
}

export function useSetOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return context.setOrder;
}

export function useOrderState() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return [context.order, context.setOrder];
}
