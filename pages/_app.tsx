import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Container from "@/components/Container";
import "@/styles/global.css";
import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}
