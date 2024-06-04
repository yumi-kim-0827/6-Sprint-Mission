import { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-[20px] mb-[10vh] md:mx-[24px] lg:mx-[100px] xl:mx-[200px] 2xl:mx-[360px]">
      {children}
    </div>
  );
}
