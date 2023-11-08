import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Comment from '../components/Comment/Comment';
import List from '../components/List/List';
import BePhamousImage from '../public/be-phamous.png';
import hallOfFame from '../content/hallOfFame.content.json';

const ThePhamousPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Phamous</title>
      </Head>

      <h2>The Phamous People (My Hall of Fame)</h2>
      <p>Pronounced as &ldquo;The Famous&rdquo;.</p>
      <p>
        Throughout my life, I have had the fortune of meeting some amazing folks. These folks have
        taught me technical skills and life lessons, given me opportunities, and been there when I
        needed help.
      </p>
      <p>To everyone here, thank you for everything and keep being awesome!</p>

      <Image src={BePhamousImage} alt="" placeholder="blur" style="width: 100%; height: auto;"/>

      {/*  eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <Comment>// The ordering of names is random.</Comment>

      <List>
        {hallOfFame.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </List>
    </>
  );
};

export default ThePhamousPage;
