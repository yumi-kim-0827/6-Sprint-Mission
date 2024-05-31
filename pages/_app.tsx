import type { AppProps } from 'next/app';
import Container from '@/src/components/layout/Container';
import { GlobalStyle } from '@/src/styles/shared/Globalstyles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
