import { useEffect, useState } from "react";

const useInfiniteScroll = (scrollAction: () => void) => {
  const [lastIntersecting, setLastIntersecting] = useState<HTMLElement | null>(
    null
  );

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    if (entries[0].isIntersecting) {
      scrollAction();
      observer.unobserve(entries[0].target);
    }
  };
  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastIntersecting) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastIntersecting);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersecting]);

  return setLastIntersecting;
};

export default useInfiniteScroll;
