/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { MOBILE_SIZE, TABLET_SIZE } from '@/constants/windowSize';

interface UseItemsCountOnWindowSizeProps {
  desktop: number;
  tablet: number;
  mobile: number;
}

const firstWindowSize = (numberOfItems: number[]) => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < MOBILE_SIZE) {
      return numberOfItems[2];
    } else if (window.innerWidth < TABLET_SIZE) {
      return numberOfItems[1];
    } else {
      return numberOfItems[0];
    }
  }
  return numberOfItems[0];
};

const useItemsCountOnWindowSize = ({
  desktop,
  tablet,
  mobile,
}: UseItemsCountOnWindowSizeProps): number => {
  const numberOfItems = [desktop, tablet, mobile];
  const [numOfItemsToShow, setsNumOfItemsToShow] = useState(
    firstWindowSize(numberOfItems)
  );

  useEffect(() => {
    const handleResize = () => {
      setsNumOfItemsToShow(firstWindowSize(numberOfItems));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return numOfItemsToShow;
};

export default useItemsCountOnWindowSize;
