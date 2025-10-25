import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './index.module.css';

const BACKGROUND_CHARACTERS = ' *,      ./0!8#X~;$\\}%'.replaceAll(' ', '\u00A0');

type HomeProps = {
  backgroundCharacters: string[];
};

const Home: NextPage<HomeProps> = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  useEffect(() => {
    const audio = document.querySelector('audio');
    try {
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        audio?.play()?.catch(() => {
          setAudioPlaying(false);
        });
        setAudioPlaying(true);
      }
    } catch {
      setAudioPlaying(false);
    }
  }, []);

  // Automatically apply staggered animation delays to elements with the
  // `animate-textFade` class within the main container.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = mainRef.current;
    if (!container) return;

    const nodes = container.querySelectorAll('.animate-textFade');
    nodes.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `calc(${index + 1} * var(--animation-delay-step))`;
    });
  }, []);

  return (
    <main
      className={`${styles.container} relative leading-normal pl-[2ch] pt-[1lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch] min-h-[100dvh] pb-[1lh]`}
      id="new"
      ref={mainRef}
      style={
        {
          '--animation-delay-step': '50ms',
        } as CSSProperties
      }
    >
      <Background />

      <h1 className="bg-white animate-textFade">john phamous</h1>
      <p className="block bg-white animate-textFade">seattle, wa</p>

      <button
        className="!absolute top-[1lh] right-[2ch] sm:right-[7ch] hover:bg-black h-[1lh] transition-colors !w-[3ch] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#006aff] rounded-none hover:!text-white font-medium bg-white animate-textFade"
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
        <span className={audioPlaying ? 'block rotate-90' : 'inline-block translate-x-[2px]'}>
          {audioPlaying ? ' = ' : <>&nbsp;▶&nbsp;</>}
        </span>
      </button>

      <h2 className="font-bold mt-[2lh] sm:mt-[3lh] bg-white animate-textFade">today</h2>
      <p className="mt-[0lh] relative animate-textFade">
        <TextBackground text="supporting the product design engineering team at vercel. currently obsessed with weightlifting and learning 中文." />
        supporting the product design engineering team at <a href="https://vercel.com">vercel</a>.
        currently obsessed with weightlifting and learning 中文.
      </p>

      <h2 className="font-bold mt-[2lh] bg-white animate-textFade">past</h2>
      <ul>
        <li className="bg-white animate-textFade">
          <a href="https://sfcompute.com">sf compute</a>, head of design
        </li>
        <li className="bg-white animate-textFade">
          <a href="https://vercel.com">vercel</a>, lead design engineer
        </li>
        <li className="bg-white animate-textFade">
          <a href="https://highlight.io">highlight</a>, founding engineer
        </li>
        <li className="bg-white animate-textFade">
          <a href="https://microsoft.com">microsoft</a>, software engineer
        </li>
        <li className="bg-white animate-textFade">
          <a href="https://jpl.nasa.gov">nasa&nbsp;jpl</a>, software engineer
        </li>
      </ul>

      <h2 className="font-bold mt-[2lh] bg-white animate-textFade">angel investments</h2>

      <p className="animate-textFade text-pretty">
        <TextBackground text="million, paper, adaline, scalar, replit, spencer agent, puma browser, wander, ssi and maybe." />
        <a href="https://million.dev/" target="_blank">
          million
        </a>
        ,{' '}
        <a href="https://paper.design/" target="_blank">
          paper
        </a>
        ,{' '}
        <a href="https://adaline.ai/" target="_blank">
          adaline
        </a>
        ,{' '}
        <a href="https://scalar.com/" target="_blank">
          scalar
        </a>
        ,{' '}
        <a href="https://replit.com/" target="_blank">
          replit
        </a>
        ,{' '}
        <a href="https://spenceragent.com/" target="_blank">
          spencer agent
        </a>
        ,{' '}
        <a href="https://www.pumabrowser.com/" target="_blank">
          puma browser
        </a>
        ,{' '}
        <a href="https://www.wander.com/" target="_blank">
          wander
        </a>
        ,{' '}
        <a href="https://ssi.inc/" target="_blank">
          ssi
        </a>{' '}
        and{' '}
        <a href="https://maybe.co/" target="_blank">
          maybe
        </a>
        .
      </p>

      <p className="animate-textFade mt-[1lh] bg-white">
        investing in devtool and design companies, msg me for the collab
      </p>

      <h2 className="font-bold mt-[2lh] animate-textFade bg-white">links</h2>
      <ul>
        <li className="animate-textFade">
          <a href="https://x.com/johnphamous" className="bg-white">
            twitter
          </a>
        </li>
        <li className="animate-textFade">
          <a href="mailto:john@pham.codes" className="bg-white">
            email
          </a>
        </li>
        <li className="animate-textFade">
          <Link href="/blog" className="bg-white">
            blog
          </Link>
        </li>
      </ul>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio src="/bg.mp3"></audio>
    </main>
  );
};

const CHARACTER_WIDTH = 9.6;
const CHARACTER_HEIGHT = 24;

const Background = () => {
  const [render, setRender] = useState(false);
  const [backgroundCharacters, setBackgroundCharacters] = useState<string[]>([]);

  /**
   * Calculate the background characters based on the viewport dimensions.
   *
   * This function is debounced to prevent excessive re-calculations.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateBackground = useCallback(
    debounce(() => {
      // Get the current viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Calculate the number of characters needed based on the viewport width and height
      const charactersNeededWidth = Math.ceil(viewportWidth / CHARACTER_WIDTH);
      const charactersNeededHeight = Math.ceil(viewportHeight / CHARACTER_HEIGHT);
      const numberOfCharactersNeeded = charactersNeededWidth * charactersNeededHeight;

      // Generate an array of random background characters
      setBackgroundCharacters(
        Array.from({ length: numberOfCharactersNeeded }).map(
          () => BACKGROUND_CHARACTERS[Math.floor(Math.random() * BACKGROUND_CHARACTERS.length)]
        )
      );
    }, 300),
    []
  );

  useEffect(() => {
    if ('document' in window) {
      setRender(true);
      calculateBackground();
    }
  }, [calculateBackground]);

  useEffect(() => {
    const handleResize = () => {
      calculateBackground();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateBackground]);

  if (!render) {
    return null;
  }

  return (
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
  );
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
      className="hover:text-black/50 hover:duration-0 duration-[0.8s] transition-[background-color,color]"
      ref={ref}
    >
      {value}
    </span>
  );
};

import {
  type CSSProperties,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

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

const TextBackground = ({ text }: { text: string }) => {
  return (
    <span
      className="absolute top-0 left-0 w-full pointer-events-none select-none -z-10 touch-none"
      aria-hidden
    >
      <span
        className="text-white bg-white"
        style={{
          overflowWrap: 'anywhere',
        }}
      >
        {text}
      </span>
    </span>
  );
};
function debounce(func: () => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      // @ts-expect-error
      func(...args);
    }, delay);
  };
}
