import Link from 'next/link';
import React from 'react';
import Highlighter from 'react-highlight-words';
import { PostType } from '../../types/blog';
import styles from './BlogPreview.module.css';

interface Props {
  post: PostType;
  searchTerm: string;
}

const BlogPreview = ({ post, searchTerm }: Props) => {
  if (process.env.NODE_ENV !== 'development' && post.draft) {
    return null;
  }

  return (
    <article key={post.slug} className={styles.article}>
      <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`} passHref>
        <a className={styles.link}>
          <h2 className={styles.titleContainer}>
            <Highlighter
              highlightClassName={styles.highlight}
              className={styles.title}
              searchWords={searchTerm.split(' ')}
              autoEscape={true}
              textToHighlight={post.title || ''}
            />
            <span className={styles.viewCount}>{post.views.toLocaleString()} views</span>
          </h2>
          <p className={styles.description}>
            <Highlighter
              highlightClassName={styles.highlight}
              searchWords={searchTerm.split(' ')}
              autoEscape={true}
              textToHighlight={post.description || ''}
            />
          </p>
        </a>
      </Link>
    </article>
  );
};

export default BlogPreview;
