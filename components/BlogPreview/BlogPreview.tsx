import Link from 'next/link';
import React from 'react';
import { PostType } from '../../types/blog';
import styles from './BlogPreview.module.css';
import Image from 'next/image';

interface Props {
  post: PostType;
}

const BlogPreview = ({ post }: Props) => {
  if (process.env.NODE_ENV !== 'development' && post.draft) {
    return null;
  }

  return (
    <article key={post.slug} className={styles.article}>
      <h1>
        <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
          <a>{post.title}</a>
        </Link>
      </h1>
      {post.image && (
        <Image src={post.image} alt="" width="800px" height={post.imageHeight || '250px'} />
      )}
      <p>{post.description}</p>
      <p>
        <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
          <a>Read More</a>
        </Link>
      </p>
    </article>
  );
};

export default BlogPreview;
