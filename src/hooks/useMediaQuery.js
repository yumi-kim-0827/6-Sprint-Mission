import { useEffect, useState } from "react";

function useMediaQuery(query, defaultMatches = window.matchMedia(query)) {
  const [matches, setMatches] = useState(defaultMatches); // true 혹은 false

  useEffect(() => {
    const media = window.matchMedia(query); // argument로 받은 query를 현재 윈도우와 match한 후 media에 넣음

    if (media.matches !== matches) setMatches(media.matches); //

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}

export default useMediaQuery;
