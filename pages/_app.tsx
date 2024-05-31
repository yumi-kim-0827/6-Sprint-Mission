import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/src/styles/shared/Globalstyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
