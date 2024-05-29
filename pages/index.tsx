import type { GetStaticProps, NextPage } from 'next';
import styles from './index.module.css';
import Link from 'next/link';

const BACKGROUND_CHARACTERS = ' *,    ./0#X~;$\\}%';
const NUMBER_OF_BACKGROUND_CHARACTERS = 10000;

type HomeProps = {
  backgroundCharacters: string[];
};

const Home: NextPage<HomeProps> = ({ backgroundCharacters }) => {
  return (
    <main
      className={`${styles.container} relative leading-normal pl-[2ch] pt-[2lh] pr-[2ch] sm:pt-[2lh] sm:pl-[7ch]`}
      id="new"
    >
      <div
        className="text-[#F2F2F2] absolute inset-0 break-words select-none"
        aria-hidden
        id="background"
      >
        {backgroundCharacters.map((char, index) => (
          <span
            key={index}
            className="hover:bg-[#FFB200] hover:text-black hover:duration-0 duration-[0.8s] transition-colors"
          >
            {char}
          </span>
        ))}
      </div>

      <h1>john phamous</h1>
      <p>seattle, wa</p>

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
