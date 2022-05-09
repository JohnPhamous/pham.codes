import React, { useCallback, useEffect, useState } from 'react';
import styles from './VimFooter.module.css';

const VimFooter = () => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!isEditing) {
      document.designMode = 'off';
    } else {
      document.designMode = 'on';
    }
  }, [isEditing]);

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (isEditing) {
        if (e.code === 'Escape') {
          setIsEditing(false);
        }
      } else {
        if (e.code === 'KeyI') {
          setIsEditing(true);
        }
      }
    },
    [isEditing]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
  }, [handleKeydown]);

  return (
    <footer className={styles.footer}>
      <section className={styles.section}>
        <div className={styles.mode}>
          {/* eslint-disable-next-line jsx-a11y/label-has-for */}
          <label>
            <input
              type="checkbox"
              onClick={() => {
                setIsEditing((previousValue) => !previousValue);
              }}
              className={`${styles.modeInput} ${isEditing ? styles.isEditing : ''}`}
            />
            <p className={`${styles.text} ${styles.modeText}`}>
              {!isEditing ? 'NORMAL' : 'INSERT'}
            </p>
          </label>
        </div>
        <p className={`${styles.text} ${styles.optionalText}`}>pham.html</p>
      </section>
      <section className={`${styles.section} ${styles.endSection}`}>
        <p>Last Updated: 05/09/2022</p>
      </section>
    </footer>
  );
};

export default VimFooter;
