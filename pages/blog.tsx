import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import BlogPreview from '../components/BlogPreview/BlogPreview';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/blog';

type BlogPageProps = {
  posts: PostType[];
};

// @ts-expect-error
const Blog: NextPage = ({ posts }: BlogPageProps) => {
  return (
    <div>
      {posts.map((post) => (
        <BlogPreview post={post} key={post.title} />
      ))}
    </div>
  );
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
