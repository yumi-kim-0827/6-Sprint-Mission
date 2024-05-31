import { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
  return (
    <button
      type="button"
      className="bg-[#3692ff] py-3 px-[23px] rounded-lg text-white"
    >
      {children}
    </button>
  );
}
