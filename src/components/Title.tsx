import React from "react";
import type { ChildrenProps } from "@/types/common.interface";

const Title = ({ children }: ChildrenProps) => {
  return (
    <h3 className="text-xl leading-14 font-bold text-gray-900">{children}</h3>
  );
};

export default Title;
