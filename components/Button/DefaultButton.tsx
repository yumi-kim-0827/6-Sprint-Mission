import { ChildrenProps } from "types/type";
import * as S from "./DefaultButtonStyles";

export default function DefaultButton({ children }: ChildrenProps) {
  return (
    <>
      <S.Button>
        {children}
      </S.Button>
    </>
  );
}
