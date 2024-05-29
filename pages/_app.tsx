import Container from "@/components/Layout/Container";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import GlobalStyle from "@/styles/globals";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}
