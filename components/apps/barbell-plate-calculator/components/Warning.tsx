import React from 'react';
import { GetPlatesWarningType } from '../app';
import styles from '../styles.module.css';

interface Props {
  type: GetPlatesWarningType;
  targetWeight: number;
  barWeight: number;
}

const Warning = ({ type, barWeight, targetWeight }: Props) => {
  let message = '';

  switch (type) {
    case 'ExactTargetWeightNotPossible':
      message = `Getting ${targetWeight} lbs exactly is not possible, there are ${} lbs remaining.`;
      break;
  }

  return <div className={styles.paper}></div>;
};

export default Warning;
