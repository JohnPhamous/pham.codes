import React from 'react';
import bucketList from '../../content/bucketList.content.json';
import { styled } from '../../styles/stitches.config';

const BucketList = () => {
  return (
    <List>
      {bucketList.map((item) => (
        <Item key={item.name}>
          <Name isCompleted={item.isDone}>{item.name}</Name>

          {!item.isDone && item.progress && <Progress>{item.progress}</Progress>}
        </Item>
      ))}
    </List>
  );
};

export default BucketList;

const List = styled('ul', {
  listStyle: 'none',
  padding: 0,

  '& li:not(:last-child)': {
    marginBottom: '$s24',
  },
});

const Item = styled('li', {
  display: 'flex',
  flexDirection: 'column',
});

const Name = styled('span', {
  variants: {
    isCompleted: {
      true: {
        textDecoration: 'line-through',
      },
    },
  },
});

const Progress = styled('span', {
  color: '$comment',
  fontStyle: 'italic',
  marginTop: '$s4',
});
