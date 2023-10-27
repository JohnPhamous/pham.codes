import React from 'react';
import styles from './Comment.module.css';

const Comment = ({ children }: { children: React.ReactNode }) => {
  return <p className={styles.comment}>{children}</p>;
};

export default Comment;
