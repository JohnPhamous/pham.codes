import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { BlogHome } from '../components/BlogHome/BlogHome';
import { getAllPosts } from '../lib/api';
import supabase from '../lib/supabase/supabase';
import { PostType } from '../types/blog';

type BlogPageProps = {
  posts: PostType[];
  mostPopularPosts: PostType[];
};

// @ts-expect-error
const Blog: NextPage = ({ posts, mostPopularPosts }: BlogPageProps) => {
  return <BlogHome posts={posts} mostPopularPosts={mostPopularPosts} />;
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

  const postsWithViews = [];
  for (let post of posts) {
    const { data } = await supabase
      .from('blog-post-view')
      .select('count')
      .eq('slug', `/blog/${post.slug}`);

    postsWithViews.push({
      ...post,
      // @ts-expect-error
      views: data[0]?.count || 0,
    });
  }

  const mostPopularPosts = [...postsWithViews]
    .sort((post1, post2) => (post1.views > post2.views ? -1 : 1))
    .slice(0, 3);

  return {
    props: { posts: postsWithViews, mostPopularPosts },
  };
};

export default Blog;
