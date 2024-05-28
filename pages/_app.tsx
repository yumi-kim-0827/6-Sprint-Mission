// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import Navigation from '@/components/navigation/navigation';
// import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: {
//     template: '%s | 판다마켓',
//     default: '판다마켓',
//   },
//   description: 'The best flea market on the world',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang='ko'>
//       <body className={inter.className}>
//         {children}
//       </body>
//     </html>
//   );
// }
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
