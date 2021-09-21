import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import BarbellPlateCalculator from '../../components/apps/barbell-plate-calculator/app';
import BarbellPlateCalculatorLayout from '../../components/apps/barbell-plate-calculator/BarbellPlateCalculatorLayout';

const BarbellPlateCalculatorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Barbell Plate Racking Calculator</title>
      </Head>

      <BarbellPlateCalculator />
    </>
  );
};

export default BarbellPlateCalculatorPage;

BarbellPlateCalculatorPage.getLayout = function getLayout(page) {
  console.log('hi');
  return <BarbellPlateCalculatorLayout>{page}</BarbellPlateCalculatorLayout>;
};
