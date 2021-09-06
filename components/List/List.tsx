import React from 'react';
import { styled } from '../../styles/stitches.config';

const List: React.FC = ({ children }) => {
  return <UL>{children}</UL>;
};

export default List;

const UL = styled('ul', {
  listStyle: 'none',
  padding: 0,

  '& li:not(:last-child)': {
    marginBottom: '1em',
  },
});
