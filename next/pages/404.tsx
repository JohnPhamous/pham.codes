import type { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import Comment from '../components/Comment/Comment';
import { styled } from '../styles/stitches.config';

const Home: NextPage = () => {
  let pathname = '';

  if (process.browser) {
    pathname = window.location.pathname;
  }

  return (
    <div>
      <HTTPCode>404: Segmentation Fault!</HTTPCode>
      <p>
        <Method>
          website.at(<String>'{pathname}'</String>)
        </Method>{' '}
        is out of bounds.
      </p>
      <Link href="/">&gt; Go To Home Page</Link>
    </div>
  );
};

export default Home;

const HTTPCode = styled('h2', {
  color: '$alert',
  fontWeight: 'bold',
});

const Method = styled('span', {
  color: '$warning',
});

const String = styled('span', {
  color: '$success',
});
