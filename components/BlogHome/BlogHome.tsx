import React, { useState } from 'react';
import { PostType } from '../../types/blog';
import BlogPreview from '../BlogPreview/BlogPreview';
import styles from './BlogHome.module.css';

interface Props {
  posts: PostType[];
  mostPopularPosts: PostType[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const BlogHome = ({ posts, mostPopularPosts }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredAllPosts =
    searchTerm === ''
      ? posts
      : posts.filter(
          ({ title, description }) =>
            title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            description?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
  const totalViews = posts.reduce((previousCount, post) => previousCount + post.views, 0);

  return (
    <div>
      <section className={styles.preamble}>
        <p>
          Welcome to my blog. I write about things that interest me, mostly about web development,
          productivity, and being a life-long learner. I&apos;ve written {posts.length} posts so far
          with a total of {totalViews.toLocaleString()} views.
        </p>

        <input
          type="search"
          name=""
          id=""
          aria-label="Search posts"
          placeholder="Search posts"
          className={styles.search}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </section>

      {/* {searchTerm === '' && (
        <>
          <h2 className={styles.header}>Most Popular</h2>
          {mostPopularPosts.map((post) => (
            <BlogPreview post={post} key={post.title} searchTerm={searchTerm} />
          ))}
          {filteredAllPosts.length === 0 && <p className={styles.noResults}>No posts found.</p>}
        </>
      )} */}

      <h2 className={styles.header}>All Posts</h2>
      {filteredAllPosts.map((post) => (
        <BlogPreview post={post} key={post.title} searchTerm={searchTerm} />
      ))}
      {filteredAllPosts.length === 0 && <p className={styles.noResults}>No posts found.</p>}
    </div>
  );
};
