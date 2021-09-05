import Head from 'next/head';
import { styled } from '../../../styles/stitches.config';
import VimFooter from '../../Footer/VimFooter';
import VimHeader from '../../Header/VimHeader';

interface Props {
  title?: string;
}

const VimLayout: React.FC<Props> = ({ title = 'John Pham', children }) => (
  <Layout>
    <Head>
      <link
        href="/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-regular.woff2"
        rel="preload"
        as="font"
        crossOrigin=""
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
    <div>
      <VimHeader />
      <main>{children}</main>
    </div>

    <VimFooter />
  </Layout>
);

export default VimLayout;

const Layout = styled('div', {
  background: '$background',
  color: '$textPrimary',
  height: '100%',
  minHeight: '100vh',
  fontFamily: 'Roboto Mono',
  fontSize: '$body',

  '& main, & header': {
    maxWidth: 'calc(90ch + $s64)',
    margin: '0 auto',
    padding: '0 $s64',
  },
  '& main': {
    paddingTop: '$s32',
    paddingBottom: 'calc($s32 + $s16)',
  },
  '& > div': {
    height: 'inherit',
  },
});
