import React from 'react';
import investments from '../../content/angel.content.json';
import styles from './AngelInvestments.module.css';
import List from '../List/List';

const AngelInvestments = () => {
  return (
    <List>
      {investments.map((investment, index) => (
        <li className={styles.item} key={investment.name} style={{ display: 'inline' }}>
          <a href={investment.demo} target="_blank" rel="noopener noreferrer">
            {investment.name}
          </a>
          {index !== investments.length - 1 ? ', ' : undefined}
        </li>
      ))}
    </List>
  );
};

export default AngelInvestments;
