import Head from 'next/head';
import VimFooter from '../../Footer/VimFooter';
import VimHeader from '../../Header/VimHeader';
import styles from './VimLayout.module.css';

interface Props {
  title?: string;
}

const VimLayout: React.FC<Props> = ({ title = 'John Pham', children }) => {
  const description =
    "John Pham's personal website. John is a software engineer, rookie lifter, and plant parent based in Seattle.";
  const heroPath = '/images/hero.png';

  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pham.codes/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={heroPath} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pham.codes/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={heroPath} />
        <title>{title}</title>
      </Head>
      <div>
        <VimHeader />
        <main>{children}</main>
      </div>

      <VimFooter />
    </div>
  );
};

export default VimLayout;
