import { useEffect } from 'react';

export default function usePageTitle(title: string) {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0];
    $title.innerText = title;
  }, [title]);
}
