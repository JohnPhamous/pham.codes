import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
// @ts-expect-error
import mdxPrism from 'mdx-prism';
import path from 'path';
import React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import { PostType } from '../../types/blog';
import Blog from '../../components/Blog/Blog';
import toc from '@jsdevtools/rehype-toc';
import ReadingTime from 'reading-time';
import supabase from '../../lib/supabase/supabase';

type PostPageProps = {
  source: any;
  frontMatter: PostType;
  readingTime: string;
  views: number;
};

const PostPage = ({ source, frontMatter, readingTime, views }: PostPageProps): JSX.Element => {
  return <Blog source={source} frontMatter={frontMatter} readingTime={readingTime} views={views} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params?.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const readingTime = ReadingTime(content);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [
        mdxPrism,
        rehypeSlug,
        () => rehypeAutolinkHeadings({ behavior: 'wrap' }),
        toc,
      ],
    },
    scope: data,
  });

  let views = 0;

  if (params?.slug) {
    const { data } = await supabase
      .from('blog-post-view')
      .select('count')
      .eq('slug', `/blog/${params.slug}`);

    if (data) {
      views = data[0]?.count || 0;
    }
  }

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      readingTime: readingTime.text,
      views,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
