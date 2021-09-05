import Head from 'next/head';
import { styled } from '../../../styles/stitches.config';
import VimFooter from '../../Footer/VimFooter';
import VimHeader from '../../Header/VimHeader';

const VimLayout: React.FC = (props) => (
  <Layout>
    <Head>
      <link
        href="/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-regular.woff2"
        rel="preload"
        as="font"
        crossOrigin=""
      />
    </Head>
    <div>
      <VimHeader />
      <main>{props.children}</main>
    </div>

    <VimFooter />
  </Layout>
);

export default VimLayout;

const Layout = styled('div', {
  background: '$background',
  color: '$textPrimary',
  height: '100%',
  fontFamily: 'Roboto Mono',
});
