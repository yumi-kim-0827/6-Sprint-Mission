import { MouseEvent } from "react";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";
import Order from "@/components/models/order";

interface Props {
  currentOrder: Order;
  handleOrder: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function OrderDropdown({ currentOrder, handleOrder }: Props) {
  const [isMobile] = useResponsive();

  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className={`relative flex size-[42px] cursor-pointer select-none items-center justify-center rounded-xl border border-gray-200 font-normal text-cool-gray-800 ${!isMobile && "min-w-[130px]"}`}
      >
        {isMobile ? (
          <Image
            src="/icons/ic_sort.svg"
            alt="sort-icon"
            width={24}
            height={24}
          />
        ) : (
          <div className="align-center flex w-full justify-between px-5">
            <span>{currentOrder}</span>
            <Image
              src="/icons/ic_arrow_down.svg"
              alt="arrow-down"
              width={24}
              height={24}
            />
          </div>
        )}
      </div>
      <div className="parent dropdown-content z-dropdown w-[130px] rounded-xl bg-white text-center shadow *:cursor-pointer *:border-b *:border-gray-200 *:py-[9px]">
        <button
          type="button"
          name="sort-by-recent"
          onClick={handleOrder}
          className="w-full hover:rounded-t-lg hover:bg-gray-50"
        >
          {Order.recent}
        </button>
        <button
          type="button"
          name="sort-by-likes"
          onClick={handleOrder}
          className="w-full border-none hover:rounded-b-lg hover:bg-gray-50"
        >
          {Order.likes}
        </button>
      </div>
    </div>
  );
}
