import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import VimFooter from '../../Footer/VimFooter';
import VimHeader from '../../Header/VimHeader';
import styles from './VimLayout.module.css';

const VimLayout = ({
  title = 'John Pham',
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const isHomePage = router.pathname === '/';
  const isBlogPage = router.pathname === '/blog/[slug]';
  const description =
    "John Pham's personal website. John is a software engineer, rookie lifter, and plant parent based in Seattle.";
  const heroPath = 'https://pham.codes/images/hero.png';

  return (
    <div className={!isHomePage ? styles.layout : styles.newLayout}>
      <Head>
        <title>{title}</title>
        {!isBlogPage && (
          <>
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
          </>
        )}
      </Head>
      <div style={isHomePage ? { minHeight: '100dvh' } : {}}>
        {!isHomePage && (
          <>
            <VimHeader />
            <main id="old">{children}</main>
          </>
        )}
        {isHomePage && children}
      </div>

      {!isBlogPage && !isHomePage && <VimFooter />}
    </div>
  );
};

export default VimLayout;
