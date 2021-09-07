import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import supabase from '../../../lib/supabase/supabase';
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

  if (!customMeta.image) {
    meta.image = `${WEBSITE_HOST_URL}/images/hero.png`;
  } else {
    meta.image = `${WEBSITE_HOST_URL}${meta.image}`;
  }

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      saveView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveView = async () => {
    await supabase.from('blog-post-view').insert([
      {
        slug: router.asPath,
      },
    ]);
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@johnphamous" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div>
        <>{children}</>
      </div>
    </div>
  );
};

export default BlogLayout;
