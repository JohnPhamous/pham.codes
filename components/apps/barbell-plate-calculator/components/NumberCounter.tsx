import { MinusIcon, PlusIcon } from '@iconicicons/react';
import React from 'react';
import styles from '../styles.module.css';

interface Props {
  label: string;
  value: string;
  setValue: (newValue: string) => void;
}

const WEIGHT_INCREMENT = 0.5;

const NumberCounter = ({ label, setValue, value }: Props) => {
  const decrementWeight = (currentWeight: string) => {
    let newWeight = parseFloat(currentWeight) - WEIGHT_INCREMENT;

    if (newWeight < 0) {
      newWeight = 0;
    }

    return newWeight.toFixed(1);
  };

  return (
    <div className={styles.paper}>
      <label htmlFor={label} className={styles.inputButton}>
        {label}
        <div className={styles.content}>
          <input
            type="string"
            inputMode="numeric"
            name={label}
            id={label}
            value={value}
            onChange={(e) => {
              const newValue = parseFloat(e.target.value);
              setValue(Number.isNaN(newValue) ? '0.0' : newValue.toFixed(1));
            }}
          />
          <div className={styles.controlsContainer}>
            <button
              onClick={() => {
                setValue(decrementWeight(value));
              }}
              aria-label={`Decrease weight by ${WEIGHT_INCREMENT}`}
            >
              <MinusIcon />
            </button>
            <button
              onClick={() => {
                setValue((parseFloat(value) + WEIGHT_INCREMENT).toFixed(1));
              }}
              aria-label={`Increase weight by ${WEIGHT_INCREMENT}`}
            >
              <PlusIcon />
            </button>
          </div>
        </div>
      </label>
    </div>
  );
};

export default NumberCounter;
