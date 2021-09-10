import '../styles/globals.css';
import type { AppProps } from 'next/app';
import VimLayout from '../components/layouts/vim/VimLayout';
import { H } from 'highlight.run';

if (process.env.NODE_ENV !== 'development') {
  H.init('wneyvxe4', {
    networkRecording: {
      recordHeadersAndBody: true
    }
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VimLayout title="John Pham">
      <Component {...pageProps} />
    </VimLayout>
  );
}
export default MyApp;
