import '../styles/globals.css';
import type { AppProps } from 'next/app';
import VimLayout from '../components/layouts/vim/VimLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VimLayout title="John Pham">
      <Component {...pageProps} />
    </VimLayout>
  );
}
export default MyApp;
