import Header from "@/components/Header/Header";
import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/icons/logo_panda.svg" />
      </Head>
      <Header />
      <main className="w-[1200px] mx-auto mt-24 border-[1px] border-dashed border-pink-100">
        <Component {...pageProps} />
      </main>
    </>
  );
}
