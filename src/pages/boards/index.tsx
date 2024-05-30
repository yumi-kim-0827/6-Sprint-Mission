import { MouseEvent, useState } from "react";
import Navbar from "@/components/commons/Navbar";
import Dropdown from "@/components/commons/Dropdown";
import Layout from "@/components/commons/Layout";
import Order from "@/models/order";
import PostCard from "@/components/boards/PostCard";
import PostPreview from "@/components/boards/PostPreview";

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
        {/* <div className="grid grid-cols-3"> */}
        <PostCard />
        {/* </div> */}
        <PostPreview />
        <PostPreview />
        <PostPreview />
        {/* <div className="fixed right-0">
          <Dropdown.Order
            currentOrder={currentOrder}
            handleOrder={handleOrder}
          />
        </div> */}
      </Layout.Main>
    </>
  );
}
