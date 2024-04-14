import React, { useEffect } from "react";
import { currentPageState } from "context/atoms/page";
import { useSetRecoilState } from "recoil";

export default function useResetPage(conditions) {
  const setCurrentPage = useSetRecoilState(currentPageState);

  useEffect(() => {
    setCurrentPage(1);
  }, [...conditions]);
}
