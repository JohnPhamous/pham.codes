import React from 'react';
import Projects from '../Projects/Projects';
import Roles from '../Roles/Roles';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>About</h2>

        <p className={styles.paragraphWithIcon}>
          <span role="img" aria-label="Hello!" className={styles.emoji}>
            👋
          </span>{' '}
          <span>
            I&apos;m John, an engineer interested in accessibility, metacognition, and building
            delighters for the web.
          </span>
        </p>
        <p className={styles.paragraphWithIcon}>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <span aria-hidden className={styles.emoji}>
            🇨🇳
          </span>{' '}
          <span>Learning Mandarin, 你好!</span>
        </p>
        <p className={styles.paragraphWithIcon}>
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <span aria-hidden className={styles.emoji}>
            🏋️‍♀️
          </span>{' '}
          <span>Training to join the 1000 pound club.</span>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Experience</h2>

        <Roles />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Ships</h2>

        <Projects />
      </section>
    </>
  );
};

export default Home;
