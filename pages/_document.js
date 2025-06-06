import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Rafaelli Capital - Investissement, financement immobilier et défiscalisation optimisée." />
        <meta property="og:title" content="RAFAELLI CAPITAL" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}