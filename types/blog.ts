export type PostType = {
  date: string;
  description: string;
  image?: string;
  slug: string;
  title: string;
};

export interface MetaProps extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
