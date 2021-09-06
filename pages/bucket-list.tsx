import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BucketList from '../components/BucketList/BucketList';

const BucketListPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bucket List</title>
      </Head>

      <BucketList />
    </>
  );
};

export default BucketListPage;
