import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { MetaProps } from '../../../types/blog';
import styles from './BlogLayout.module.css';

interface Props {
  customMeta: MetaProps;
}

export const WEBSITE_HOST_URL = 'https://pham.codes';

const BlogLayout: React.FC<Props> = ({ children, customMeta }) => {
  const router = useRouter();
  const meta: MetaProps = {
    image: `${WEBSITE_HOST_URL}/images/hero.png`,
    type: 'website',
    ...customMeta,
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${WEBSITE_HOST_URL}${router.asPath}`} />
        <link rel="canonical" href={`${WEBSITE_HOST_URL}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="John Pham" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@johnphamous" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <div>
        <>{children}</>
      </div>
    </div>
  );
};

export default BlogLayout;
