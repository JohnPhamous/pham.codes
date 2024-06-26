import '../styles/globals.css';
import type { AppProps } from 'next/app';
import VimLayout from '../components/layouts/vim/VimLayout';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-expect-error
  if (Component.getLayout) {
    // @ts-expect-error
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <VimLayout title="john phamous">
        <Component {...pageProps} />
      </VimLayout>
      <Analytics />
    </>
  );
}
export default MyApp;
