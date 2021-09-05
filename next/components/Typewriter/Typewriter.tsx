import React from 'react';
import { keyframes, styled } from '../../styles/stitches.config';

const Typewriter: React.FC = ({ children }) => {
  return <TypeWriterAnimation>{children}</TypeWriterAnimation>;
};

export default Typewriter;

const typewriterKeyframes = keyframes({
  '0%': { width: '0' },
  '100%': { width: '100%' },
});

const cursorKeyframes = keyframes({
  '0%': { borderRight: '0.15em solid transparent' },
  '50%': { borderRight: '0.15em solid $accent' },
  '100%': { borderRight: '0.15em solid transparent' },
});

const TypeWriterAnimation = styled('span', {
  overflow: 'hidden',
  display: 'inline-block',
  borderRight: '0.15em solid $accent',
  whiteSpace: 'nowrap',
  margin: '0 auto',
  fontWeight: '400',
  transition: 'border 0.75s',
  width: 'fit-content',
  animation: `${typewriterKeyframes} 1s steps(40, end) 0.5s both, ${cursorKeyframes} 1s step-end infinite`,
});
