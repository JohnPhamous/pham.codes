import '../styles/globals.css';
import type { AppProps } from 'next/app';
import VimLayout from '../components/layouts/vim/VimLayout';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-expect-error
  if (Component.getLayout) {
    // @ts-expect-error
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <VimLayout title="John Pham">
      <Component {...pageProps} />
    </VimLayout>
  );
}
export default MyApp;
