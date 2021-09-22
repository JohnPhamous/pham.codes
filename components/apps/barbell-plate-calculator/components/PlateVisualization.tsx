import React from 'react';
import styles from '../styles.module.css';

interface Props {
  plates: { [key: string]: number };
}

const LARGEST_PLATE_WEIGHT = 45.0;
const EXAGGERATION_FACTOR = 10;

const PlateVisualization = ({ plates }: Props) => {
  return (
    <div className={styles.platesContainer}>
      {Object.keys(plates).map((weight) => {
        const numberOfPlates = plates[weight];

        if (numberOfPlates === 0) {
          return null;
        }

        const size = parseFloat(weight) / LARGEST_PLATE_WEIGHT;

        return (
          <div
            key={weight}
            className={styles.plate}
            style={{
              width: `${Math.min(size * 100 + EXAGGERATION_FACTOR, 100)}%`,
            }}
          >
            <div className={styles.plateInner}>
              <span className={styles.label}>{weight}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlateVisualization;
