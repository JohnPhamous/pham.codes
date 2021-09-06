import type { NextPage } from 'next';
import React from 'react';
import Projects from '../components/Projects/Projects';
import Roles from '../components/Roles/Roles';
import { styled } from '../styles/stitches.config';

const Home: NextPage = () => {
  return (
    <>
      <Section>
        <SectionHeader>About</SectionHeader>

        <ParagraphWithIcon>
          <span role="img" aria-label="Hello!">
            👋
          </span>{' '}
          <span>
            I&apos;m John, an engineer interested in accessibility, metacognition, and building
            delighters for the web.
          </span>
        </ParagraphWithIcon>
        <ParagraphWithIcon>
          <span role="img" aria-label="">
            🇨🇳
          </span>{' '}
          <span>Learning Mandarin, 你好!</span>
        </ParagraphWithIcon>
        <ParagraphWithIcon>
          <span role="img" aria-label="">
            🏋️‍♀️
          </span>{' '}
          <span>Training to join the 1000 pound club.</span>
        </ParagraphWithIcon>
      </Section>

      <Section>
        <SectionHeader>Experience</SectionHeader>

        <Roles />
      </Section>

      <Section>
        <SectionHeader>Ships</SectionHeader>

        <Projects />
      </Section>
    </>
  );
};

export default Home;

const ParagraphWithIcon = styled('p', {
  display: 'flex',
  columnGap: '$s12',
  position: 'relative',

  '& > span[role="img"]': {
    position: 'absolute',
    left: 'calc(-1 * (1ch + $s16))',
  },
});

const Section = styled('section', {
  '&:not(:last-of-type)': {
    marginBottom: '$s64',
  },
});

const SectionHeader = styled('h2', {
  '&::before': {
    content: '#',
    color: '$comment',
    position: 'relative',
    left: 'calc(-1 * $s4)',
    marginLeft: 'calc(1ch * -1)',
  },
});
