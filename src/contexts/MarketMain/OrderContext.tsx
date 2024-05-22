import { Order } from "@/models/order";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface OrderContextInterface {
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
}

const OrderContext = createContext<OrderContextInterface>({
  order: "최신순",
  setOrder: () => {},
});

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<Order>("최신순");

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

export function useOrderState(): [Order, Dispatch<SetStateAction<Order>>] {
  const context = useContext(OrderContext);
  if (!context) throw new Error("Provider 안에서 사용해야 합니다");
  return [context.order, context.setOrder];
}
