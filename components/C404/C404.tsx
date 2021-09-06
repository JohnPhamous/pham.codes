import Link from 'next/link';
import React from 'react';
import styles from './C404.module.css';

interface Props {
  pathname: string;
}

const C404 = ({ pathname }: Props) => {
  return (
    <div>
      <h2 className={styles.httpCode}>404: Segmentation Fault!</h2>
      <p>
        <span className={styles.method}>
          website.at(<span className={styles.string}>&lsquo;{pathname}&rsquo;</span>)
        </span>{' '}
        is out of bounds.
      </p>
      <Link href="/">&gt; Go To Home Page</Link>
    </div>
  );
};

export default C404;
