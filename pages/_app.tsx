import '@/styles/reset.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import TopNavigation from '@/components/TopNavigation';
import Container from '@/components/Container';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./images/favicon.png" />
      </Head>
      <div>
        <TopNavigation />
        <Container>
          <Component {...pageProps} />
        </Container>
      </div>
    </>
  );
}
