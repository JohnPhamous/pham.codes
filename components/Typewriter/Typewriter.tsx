import React from 'react';
import styles from './Typewriter.module.css';

const Typewriter = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.typewriterContainer}>{children}</h1>;
};

export default Typewriter;
