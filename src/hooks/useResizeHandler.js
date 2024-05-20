import { useEffect } from "react";
import { throttle } from "lodash-es";

const useResizeHandler = (handler, duration) => {
  useEffect(() => {
    const handleResize = throttle(handler, duration);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handler]);
};

export default useResizeHandler;
