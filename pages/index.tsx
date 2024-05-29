import type { GetStaticProps, NextPage } from 'next';
import styles from './index.module.css';
import Link from 'next/link';

const BACKGROUND_CHARACTERS = ' *,    ./0!8#X~;$\\}%'.replaceAll(' ', '\u00A0');
const NUMBER_OF_BACKGROUND_CHARACTERS = 15_000;

type HomeProps = {
  backgroundCharacters: string[];
};

const Home: NextPage<HomeProps> = ({ backgroundCharacters }) => {
  const [audioPlaying, setAudioPlaying] = useState(true);
  useEffect(() => {
    const audio = document.querySelector('audio');
    try {
      audio?.play()?.catch(() => {
        setAudioPlaying(false);
      });
    } catch {
      setAudioPlaying(false);
    }
  }, []);

  return (
    <main
      className={`${styles.container} relative leading-normal pl-[2ch] pt-[2lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch] min-h-[100dvh] pb-[2lh]`}
      id="new"
    >
      <div
        className="text-[#F2F2F2] absolute inset-0 break-words select-none animate-fade font-normal opacity-0 contain-strict"
        aria-hidden
        id="background"
        style={{
          animationDelay: '1s',
        }}
      >
        {backgroundCharacters.map((char, index) => (
          <Character value={char} key={index} />
        ))}
      </div>

      <h1>john phamous</h1>
      <p>seattle, wa</p>

      <button
        className="!absolute top-[2lh] right-[2ch] sm:right-[7ch] hover:bg-black h-[1lh] transition-colors !w-[3ch] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#006aff] rounded-none hover:!text-white font-medium"
        aria-label={audioPlaying ? 'Pause Audio' : 'Play Audio'}
        onClick={() => {
          const audio = document.querySelector('audio');
          if (audioPlaying) {
            audio?.pause();
          } else {
            audio?.play();
          }
          setAudioPlaying((prev) => !prev);
        }}
      >
        <span className={audioPlaying ? 'rotate-90 block' : 'translate-x-[2px] inline-block'}>
          {audioPlaying ? '=' : '▶'}
        </span>
      </button>

      <h2 className="font-medium mt-[3lh]">now</h2>
      <p className="mt-[0lh]">
        i work as a lead design engineer at <a href="https://vercel.com">vercel</a> designing and
        building interfaces. currently obsessed with weightlifting, pickelball, and learning 中文.
      </p>
      <p className="mt-[1lh] ">
        previously worked at <a href="https://highlight.io">highlight</a>,{' '}
        <a href="https://www.codecademy.com/">codecademy</a>,{' '}
        <a href="https://smartsheet.com">smartsheet</a>,{' '}
        <a href="https://microsoft.com">microsoft</a>, <a href="https://jpl.nasa.gov">nasa jpl</a>,{' '}
        <a href="https://amazon.com">amazon</a>, <a href="https://www.burberryplc.com/">burberry</a>
        , and <a href="https://www.spacex.com/">spacex</a>.
      </p>

      <h2 className="font-medium mt-[2lh]">angel investments</h2>
      <p>
        <a href="https://scalar.com/">scalar</a>, <a href="https://replit.com/">replit</a>,{' '}
        <a href="https://www.wander.com/">wander</a> and{' '}
        <a href="https://detangle.ai/">detangle.ai</a>.
      </p>

      <h2 className="font-medium mt-[2lh]">links</h2>
      <ul>
        <li>
          <a href="https://x.com/johnphamous">twitter/x</a>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
      </ul>
      <audio src="/bg.mp3"></audio>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const backgroundCharacters = Array.from({ length: NUMBER_OF_BACKGROUND_CHARACTERS }).map(
    () => BACKGROUND_CHARACTERS[Math.floor(Math.random() * BACKGROUND_CHARACTERS.length)]
  );

  return {
    props: {
      backgroundCharacters,
    },
  };
};

export default Home;

const Character = ({ value }: { value: string }) => {
  const noise = useRef(Math.floor(Math.random() * 1500) + 500);
  const ref = useRef<HTMLSpanElement>(null);

  useInterval(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (Math.random() < 0.01) {
      if (ref.current) {
        ref.current.animate([{ color: '#F2F2F2' }, { color: '#C9C9C9' }, { color: '#F2F2F2' }], {
          duration: 1000,
          easing: 'linear',
        });
      }
    }
  }, noise.current);

  return (
    <span
      className="hover:bg-[#FFB200] hover:text-black hover:duration-0 duration-[0.8s] transition-[background-color,color]"
      ref={ref}
    >
      {value}
    </span>
  );
};

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(id);
    };
  }, [delay]);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
