import { format, parseISO } from 'date-fns';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import { MetaProps, PostType } from '../../types/blog';
import Head from 'next/head';
import Link from 'next/link';
import BlogLayout from '../layouts/blog/BlogLayout';
import Image from 'next/image';
import styles from './Blog.module.css';
import Youtube from '../Youtube/Youtube';

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  Head,
  Image,
  Link,
  Youtube,
};

const Blog = ({ frontMatter, source }: Props) => {
  const WEBSITE_HOST_URL = '';

  const customMeta: MetaProps = {
    title: `${frontMatter.title}`,
    description: frontMatter.description,
    image: `${WEBSITE_HOST_URL}${frontMatter.image}`,
    date: frontMatter.date,
    type: 'article',
  };

  return (
    <BlogLayout customMeta={customMeta}>
      <article className={styles.blog}>
        {customMeta.image && <Image src={customMeta.image} alt="" width="800px" height="250px" />}
        <h1 className={styles.title}>{frontMatter.title}</h1>
        <p className={styles.date}>
          Last Updated: {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}
        </p>

        <div className="">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </BlogLayout>
  );
};

export default Blog;
