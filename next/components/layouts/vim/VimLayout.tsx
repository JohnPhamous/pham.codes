import Head from 'next/head';
import { styled } from '../../../styles/stitches.config';
import globalStyles from '../../../styles/stitches.global';
import VimFooter from '../../Footer/VimFooter';
import VimHeader from '../../Header/VimHeader';

interface Props {
  title?: string;
}

const VimLayout: React.FC<Props> = ({ title = 'John Pham', children }) => {
  globalStyles();

  return (
    <Layout>
      <Head>
        <link
          href="/fonts/roboto-mono-v13-latin/roboto-mono-v13-latin-regular.woff2"
          rel="preload"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta
          name="description"
          content="John Pham's personal website. John Pham is a software engineer with experience in full stack web development."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pham.codes/" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="John Pham's personal website. John Pham is a software engineer with experience in full stack web development."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pham.codes/" />
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content="John Pham's personal website. John Pham is a software engineer with experience in full stack web development."
        />
        <meta property="twitter:image" content="" />
        <title>{title}</title>
      </Head>
      <div>
        <VimHeader />
        <main>{children}</main>
      </div>

      <VimFooter />
    </Layout>
  );
};

export default VimLayout;

const Layout = styled('div', {
  background: '$background',
  color: '$textPrimary',
  height: '100%',
  minHeight: '100vh',
  fontFamily: 'Roboto Mono',
  fontSize: '$body',

  '& main, & header': {
    maxWidth: 'calc(80ch + $s24)',
    margin: '0 auto',
    padding: '0 $s24',
  },
  '& main': {
    paddingTop: '$s40',
    paddingBottom: 'calc($s12 + $s64)',
  },
  '& > div': {
    height: 'inherit',
  },
});
