import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { BlogHome } from '../components/BlogHome/BlogHome';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/blog';

type BlogPageProps = {
  posts: PostType[];
};

// @ts-expect-error
const Blog: NextPage = ({ posts }: BlogPageProps) => {
  return <BlogHome posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'date',
    'description',
    'slug',
    'title',
    'image',
    'imageHeight',
    'draft',
  ]);

  return {
    props: { posts },
  };
};

export default Blog;
