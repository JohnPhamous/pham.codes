export type PostType = {
  date: string;
  description: string;
  image?: string;
  imageHeight: number;
  slug: string;
  title: string;
};

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title' | 'imageHeight'> {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
