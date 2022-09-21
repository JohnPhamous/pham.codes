import React from 'react';
import styles from '../styles.module.css';

interface Props {
  plates: { [key: string]: number };
}

const LARGEST_PLATE_WEIGHT = 45.0;
const EXAGGERATION_FACTOR = 10;
/** This is in seconds. */
const BASE_ANIMATION_DELAY = 0.2;

const PlateVisualization = ({ plates }: Props) => {
  const nonZeroPlates = Object.keys(plates)
    .map((weight) => plates[weight])
    .filter((weight) => weight !== 0).length;

  return (
    <div className={styles.platesContainer} key="plateVisualization">
      {Object.keys(plates).map((weight, index) => {
        const numberOfPlates = plates[weight];

        if (numberOfPlates === 0) {
          return null;
        }

        const size = parseFloat(weight) / LARGEST_PLATE_WEIGHT;

        const platesArray = Array.from(Array(numberOfPlates).keys());

        return platesArray.map((_, jIndex) => {
          return (
            <div
              key={`${weight}-${jIndex}`}
              className={styles.plate}
              style={{
                width: `${Math.min(size * 100 + EXAGGERATION_FACTOR, 100)}%`,
                animationDelay: `${
                  BASE_ANIMATION_DELAY * ((nonZeroPlates - (index + jIndex) + 1) / nonZeroPlates)
                }s`,
              }}
            >
              <div className={styles.plateInner}>
                <span className={styles.label}>{weight}</span>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

export default PlateVisualization;
