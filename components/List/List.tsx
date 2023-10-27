import React from 'react';
import styles from './List.module.css';

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default List;
