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
      <div className={myFont.className}>
        <Header />
        <div className={`px-4 md:px-6 lg:flex lg:justify-center`}>
          <main className="lg:w-[1200px]">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </>
  );
}
