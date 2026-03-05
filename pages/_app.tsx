import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { WebsiteProvider } from '@/contexts/WebsiteContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mena Agent Hotel Alliance</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <WebsiteProvider>
        <Component {...pageProps} />
      </WebsiteProvider>
    </>
  );
}
