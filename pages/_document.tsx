import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <title>판다마켓</title>
        <meta name='description' content='The best flea market in the world - Home' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
