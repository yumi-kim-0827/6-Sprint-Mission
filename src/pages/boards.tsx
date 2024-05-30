import { MouseEvent, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Dropdown from "@/components/commons/Dropdown";
import Layout from "@/components/commons/Layout";
import Order from "@/components/models/order";

export default function FreeBoard() {
  const [currentOrder, setCurrentOrder] = useState<Order>(Order.recent);

  const handleOrder = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget;

    if (name === "sort-by-recent") setCurrentOrder(Order.recent);
    if (name === "sort-by-likes") setCurrentOrder(Order.likes);
  };

  return (
    <>
      <Navbar />
      <Layout.Main>
        <div className="fixed right-0">
          <Dropdown.Order
            currentOrder={currentOrder}
            handleOrder={handleOrder}
          />
        </div>
      </Layout.Main>
    </>
  );
}
