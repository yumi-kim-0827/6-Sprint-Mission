import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/font/Pretendard-Regular.otf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
