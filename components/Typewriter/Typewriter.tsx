import React from 'react';
import styles from './Typewriter.module.css';

const Typewriter: React.FC = ({ children }) => {
  return <span className={styles.typewriterContainer}>{children}</span>;
};

export default Typewriter;
