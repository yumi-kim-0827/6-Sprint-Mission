import React, { useEffect } from "react";
import { throttle } from "lodash-es";

const useResizeHandler = (handler) => {
  useEffect(() => {
    const handleResize = throttle(handler, 500);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handler]);
};

export default useResizeHandler;
