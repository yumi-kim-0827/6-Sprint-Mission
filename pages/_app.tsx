import Header from "@/components/Header/Header";
import "./globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="w-[1200px] mx-auto mt-20 border-[1px] border-dashed border-pink-100">
      <Component {...pageProps} />
    </main>
  );
}
