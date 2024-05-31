import { PropsWithChildren } from "react";

export const OnlyMobileComponent = ({ children }: PropsWithChildren) => {
  return <div className="md:hidden">{children}</div>;
};

export const OnlyTabletComponent = ({ children }: PropsWithChildren) => {
  return <div className="hidden md:block lg:hidden">{children}</div>;
};

export const OnlyDesktopComponent = ({ children }: PropsWithChildren) => {
  return <div className="hidden lg:block">{children}</div>;
};

export const UpperDesktopComponent = ({ children }: PropsWithChildren) => {
  return <div className="hidden lg:block">{children}</div>;
};

export const UpperTabletComponent = ({ children }: PropsWithChildren) => {
  return <div className="hidden md:block">{children}</div>;
};

export const UpperMobileComponent = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};
