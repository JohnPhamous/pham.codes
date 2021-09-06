import React from 'react';
import { styled } from '../../styles/stitches.config';

const Comment: React.FC = ({ children }) => {
  return <StyledComment>{children}</StyledComment>;
};

export default Comment;

const StyledComment = styled('p', {
  color: '$comment',
  fontStyle: 'italic',
});
