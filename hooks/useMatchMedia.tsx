import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleMediaChange = () => setMatches(mediaQuery.matches);

    mediaQuery.addListener(handleMediaChange);
    handleMediaChange();

    return () => mediaQuery.removeListener(handleMediaChange);
  }, [query]);

  return matches;
};

export default useMediaQuery;
