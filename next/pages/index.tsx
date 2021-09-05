import type { NextPage } from 'next';
import React from 'react';
import { styled } from '../styles/stitches.config';

const Home: NextPage = () => {
  return (
    <>
      <section>
        <h2>About</h2>
        <ParagraphWithIcon>
          <span role="img" aria-label="Hello!">
            👋
          </span>{' '}
          <span>
            I'm John, an engineer interested in accessibility, metacognition, and building
            delighters for the web.
          </span>
        </ParagraphWithIcon>
        <ParagraphWithIcon>
          <span role="img">🇨🇳</span> <span>Learning Mandarin, 你好!</span>
        </ParagraphWithIcon>
        <ParagraphWithIcon>
          <span role="img">🏋️‍♀️</span> <span>Training to join the 1000 pound club.</span>
        </ParagraphWithIcon>
      </section>
    </>
  );
};

export default Home;

const ParagraphWithIcon = styled('p', {
  display: 'flex',
  columnGap: '$s12',
});
