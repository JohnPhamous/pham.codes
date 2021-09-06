import React from 'react';
import bucketList from '../../content/bucketList.content.json';
import List from '../List/List';
import styles from './BucketList.module.css';

const BucketList = () => {
  return (
    <List>
      {bucketList.map((item) => (
        <li key={item.name} className={styles.item}>
          <span className={item.isDone ? styles.completed : ''}>{item.name}</span>

          {!item.isDone && item.progress && (
            <span className={styles.progress}>{item.progress}</span>
          )}
        </li>
      ))}
    </List>
  );
};

export default BucketList;
