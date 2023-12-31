import React from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import StargateWidget from '../ui/Widget'


const Bridge: NextPage = () => {

  return (
    <>
      <Head>
        <title>FrogSwap | Bridge</title>
      </Head>
      <div className="container mx-auto w-[95%] md:w-2/6  py-20 ">
        <StargateWidget />
      </div>
    </>
  );
}

export default Bridge;