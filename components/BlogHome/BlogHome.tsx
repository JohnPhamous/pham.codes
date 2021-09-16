import React, { useState } from 'react';
import { PostType } from '../../types/blog';
import BlogPreview from '../BlogPreview/BlogPreview';
import styles from './BlogHome.module.css';
import Highlighter from 'react-highlight-words';

interface Props {
  posts: PostType[];
}

export const BlogHome = ({ posts }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts =
    searchTerm === ''
      ? posts
      : posts.filter(
          ({ title, description }) =>
            title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            description?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );

  return (
    <div>
      <section className={styles.preamble}>
        <p>
          Welcome to my blog. I write about things that interest me, mostly about web development,
          productivity, and being a life-long learner. I&apos;ve written {posts.length} posts so
          far.
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

      <h1 className={styles.h1}>All Posts</h1>
      {filteredPosts.map((post) => (
        <BlogPreview post={post} key={post.title} searchTerm={searchTerm} />
      ))}
      {filteredPosts.length === 0 && <p className={styles.noResults}>No posts found.</p>}
    </div>
  );
};
