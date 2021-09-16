import NextLink from 'next/link';
import Typewriter from '../Typewriter/Typewriter';
import styles from './VimHeader.module.css';

const VimHeader = () => {
  return (
    <header>
      <NextLink href="/">
        <a>
          <span aria-label="John Pham at Seattle" className={styles.brand}>
            <Typewriter>
              <span className={styles.brandName}>JohnPham</span>@Seattle
            </Typewriter>
          </span>
        </a>
      </NextLink>

      <ul className={styles.linksContainer}>
        <li>
          <NextLink href="/blog" passHref>
            <a className={styles.link} aria-label="Blog">
              _blog
            </a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/bucket-list" passHref>
            <a className={styles.link} aria-label="Bucket List">
              _bucketList
            </a>
          </NextLink>
        </li>
        <li>
          <NextLink href="/the-phamous" passHref>
            <a className={styles.link} aria-label="The Phamous">
              _thePhamous
            </a>
          </NextLink>
        </li>
        <li>
          <a className={styles.link} href="mailto:john@pham.codes">
            email
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/johnphamous/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            className={styles.link}
            href="https://twitter.com/JohnPhamous"
            target="_blank"
            rel="noopener noreferrer"
          >
            tweet
          </a>
        </li>
      </ul>
    </header>
  );
};

export default VimHeader;
