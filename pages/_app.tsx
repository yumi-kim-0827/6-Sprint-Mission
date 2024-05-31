import "@/styles/globals.css";
import { Header } from "@/widgets/header";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";

const myFont = localFont({ src: "../public/font/Pretendard-Regular.otf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" type="image/x-icon" href="/icons/pandaIcon.png" />
      </Head>
      <main className={myFont.className}>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
