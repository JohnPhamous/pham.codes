import React from 'react';
import styles from './List.module.css';

const List: React.FC = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default List;
