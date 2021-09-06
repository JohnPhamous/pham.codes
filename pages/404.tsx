import type { NextPage } from 'next';
import React from 'react';
import C404 from '../components/C404/C404';

const Home: NextPage = () => {
  let pathname = '';

  if (process.browser) {
    pathname = window.location.pathname;
  }

  return <C404 pathname={pathname} />;
};

export default Home;
