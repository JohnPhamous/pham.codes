import Link from 'next/link';
import React from 'react';
import { PostType } from '../../types/blog';
import styles from './BlogPreview.module.css';

interface Props {
  post: PostType;
}

const BlogPreview = ({ post }: Props) => {
  if (process.env.NODE_ENV !== 'development' && post.draft) {
    return null;
  }

  return (
    <article key={post.slug} className={styles.article}>
      <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`} passHref>
        <a className={styles.link}>
          <h2>{post.title}</h2>
          <p className={styles.description}>{post.description}</p>
        </a>
      </Link>
    </article>
  );
};

export default BlogPreview;
