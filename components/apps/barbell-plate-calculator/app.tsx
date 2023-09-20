import { RefreshIcon } from '@iconicicons/react';
import { useLocalStorage } from 'usehooks-ts';
import React, { useState, useEffect } from 'react';
import NumberCounter from './components/NumberCounter';
import PlateVisualization from './components/PlateVisualization';
import styles from './styles.module.css';

const DEFAULT_TARGET_WEIGHT = '200.0';
const DEFAULT_BAR_WEIGHT = '45.0';

const BarbellPlateCalculator = () => {
  const [targetWeight, setTargetWeight] = useLocalStorage('targetWeight', DEFAULT_TARGET_WEIGHT);
  const [barWeight, setBarWeight] = useLocalStorage('barWeight', DEFAULT_BAR_WEIGHT);
  const [view, setView] = useState<'visualization' | 'table'>('visualization');

  const { plates } = getPlates(parseFloat(targetWeight), parseFloat(barWeight));

  useEffect(() => {
    if (targetWeight === "NaN") {
      setTargetWeight(DEFAULT_TARGET_WEIGHT);
    }

    if (barWeight === "NaN") {
      setBarWeight(DEFAULT_BAR_WEIGHT);
    }
  }, [targetWeight, barWeight]);

  return (
    <div className={styles.app}>
      <h1>Barbell Racking Calculator</h1>

      <main>
        <section className={styles.inputContainer}>
          <NumberCounter label="Bar Weight" value={barWeight} setValue={setBarWeight} />
          <NumberCounter label="Target Weight" value={targetWeight} setValue={setTargetWeight} />
        </section>

        <section className={styles.paper}>
          <div className={styles.viewHeader} key="header">
            <h3>{view === 'table' ? 'Plates' : 'Visualization'}</h3>
            <button
              className={styles.switchViewButton}
              onClick={() => {
                setView((previousView) => (previousView === 'table' ? 'visualization' : 'table'));
              }}
            >
              <RefreshIcon />
            </button>
          </div>
          {view === 'table' ? (
            <div className={styles.table}>
              {Object.keys(plates).map((weight) => {
                const numberOfPlates = plates[weight];

                if (numberOfPlates === 0) {
                  return null;
                }

                return (
                  <div key={weight} className={styles.row}>
                    <span className={styles.key}>{weight} lbs</span>
                    <span className={styles.value}>{plates[weight]}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <PlateVisualization plates={plates} />
          )}
        </section>
      </main>
    </div>
  );
};

export default BarbellPlateCalculator;

const AVAILABLE_PLATES: { [key: string]: number } = {
  '2.5': 2.5,
  '5.0': 5.0,
  '10.0': 10.0,
  '25.0': 25.0,
  '35.0': 35.0,
  '45.0': 45.0,
};

export type GetPlatesWarningType = 'TargetWeightLessThanBar' | 'ExactTargetWeightNotPossible';

function getPlates(
  targetWeight: number,
  barbellWeight: number
): {
  // @ts-expect-error
  plates: { [key: string]: number; warning?: GetPlatesWarningType };
} {
  let warning: GetPlatesWarningType | undefined = undefined;
  let neededPlates: { [key: string]: number } = Object.keys(AVAILABLE_PLATES).reduce(
    (acc, curr) => {
      return { ...acc, [curr.toString()]: 0 };
    },
    {}
  );

  if (targetWeight <= barbellWeight) {
    warning = 'TargetWeightLessThanBar';
  }

  let weightPerSide = (targetWeight - barbellWeight) / 2;

  if (weightPerSide % AVAILABLE_PLATES['2.5'] !== 0) {
    warning = 'ExactTargetWeightNotPossible';
  }

  while (weightPerSide >= AVAILABLE_PLATES['2.5']) {
    if (weightPerSide >= AVAILABLE_PLATES['45.0']) {
      neededPlates['45.0'] += 1;
      weightPerSide -= AVAILABLE_PLATES['45.0'];
    } else if (weightPerSide >= AVAILABLE_PLATES['35.0']) {
      neededPlates['35.0'] += 1;
      weightPerSide -= AVAILABLE_PLATES['35.0'];
    } else if (weightPerSide >= AVAILABLE_PLATES['25.0']) {
      neededPlates['25.0'] += 1;
      weightPerSide -= AVAILABLE_PLATES['25.0'];
    } else if (weightPerSide >= AVAILABLE_PLATES['10.0']) {
      neededPlates['10.0'] += 1;
      weightPerSide -= AVAILABLE_PLATES['10.0'];
    } else if (weightPerSide >= AVAILABLE_PLATES['5.0']) {
      neededPlates['5.0'] += 1;
      weightPerSide -= AVAILABLE_PLATES['5.0'];
    } else if (weightPerSide >= AVAILABLE_PLATES['2.5']) {
      neededPlates['2.5'] += 1;
      weightPerSide -= AVAILABLE_PLATES['2.5'];
    }
  }

  // @ts-expect-error
  return { plates: neededPlates, warning };
}
