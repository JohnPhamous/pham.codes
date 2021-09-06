import { format, parseISO } from 'date-fns';
import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/blog';

type BlogPageProps = {
  posts: PostType[];
};

const Home: NextPage = ({ posts }: BlogPageProps) => {
  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug} className="mt-12">
          <p className="">{format(parseISO(post.date), 'MMMM dd, yyyy')}</p>
          <h1 className="mb-2 text-xl">
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400">{post.title}</a>
            </Link>
          </h1>
          <p className="mb-3">{post.description}</p>
          <p>
            <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
              <a>Read More</a>
            </Link>
          </p>
        </article>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Home;
