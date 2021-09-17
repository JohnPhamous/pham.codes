import { useOthers, useUpdateMyPresence } from '@liveblocks/react';
import React, { useEffect } from 'react';
import Projects from '../Projects/Projects';
import Roles from '../Roles/Roles';
import styles from './Home.module.css';

const Home = () => {
  const cursors = useWindowLiveCursors();

  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>About</h2>

        <p className={styles.paragraphWithIcon}>
          <span role="img" aria-label="Hello!">
            👋
          </span>{' '}
          <span>
            I&apos;m John, an engineer interested in accessibility, metacognition, and building
            delighters for the web.
          </span>
        </p>
        <p className={styles.paragraphWithIcon}>
          <span role="img" aria-label="">
            🇨🇳
          </span>{' '}
          <span>Learning Mandarin, 你好!</span>
        </p>
        <p className={styles.paragraphWithIcon}>
          <span role="img" aria-label="">
            🏋️‍♀️
          </span>{' '}
          <span>Training to join the 1000 pound club.</span>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Experience</h2>

        <Roles />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Ships</h2>

        <Projects />
      </section>
      {cursors.map(({ x, y, connectionId }) => (
        <Cursor key={connectionId} color={COLORS[connectionId % COLORS.length]} x={x} y={y} />
      ))}
    </>
  );
};

export default Home;

function useWindowLiveCursors() {
  const updateMyPresence = useUpdateMyPresence();

  useEffect(() => {
    let scroll = {
      x: window.scrollX,
      y: window.scrollY,
    };

    let lastPosition: null | { x: number; y: number } = null;

    function transformPosition(point: any) {
      return {
        x: point.x / window.innerWidth,
        y: point.y,
      };
    }

    function onPointerMove(event: any) {
      const position = {
        x: event.pageX,
        y: event.pageY,
      };
      lastPosition = position;
      updateMyPresence({
        cursor: transformPosition(position),
      });
    }

    function onPointerLeave() {
      lastPosition = null;
      updateMyPresence({ cursor: null });
    }

    function onDocumentScroll() {
      if (lastPosition) {
        const offsetX = window.scrollX - scroll.x;
        const offsetY = window.scrollY - scroll.y;
        const position = {
          x: lastPosition?.x + offsetX,
          y: lastPosition?.y + offsetY,
        };
        lastPosition = position;
        updateMyPresence({
          cursor: transformPosition(position),
        });
      }
      scroll.x = window.scrollX;
      scroll.y = window.scrollY;
    }

    document.addEventListener('scroll', onDocumentScroll);
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerleave', onPointerLeave);

    return () => {
      document.removeEventListener('scroll', onDocumentScroll);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [updateMyPresence]);

  const others = useOthers();

  return others
    .toArray()
    .filter((user) => user.presence?.cursor != null)
    .map(({ connectionId, presence, id, info }) => {
      return {
        x: presence?.cursor.x * window.innerWidth,
        y: presence?.cursor.y,
        connectionId,
        id,
        info,
        presence,
      };
    });
}

function Cursor({ color, x, y }: { color: string; x: number; y: number }) {
  return (
    <svg
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'transform 0.5s cubic-bezier(.17,.93,.38,1)',
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      width="24"
      height="36"
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill={color}
      />
    </svg>
  );
}

const COLORS = ['#DC2626', '#D97706', '#059669', '#7C3AED', '#DB2777'];
