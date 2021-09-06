import React from 'react';
import styles from './Comment.module.css';

const Comment: React.FC = ({ children }) => {
  return <p className={styles.comment}>{children}</p>;
};

export default Comment;
