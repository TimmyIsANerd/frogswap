/* eslint-disable unused-imports/no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import ToggleButton from '../ui/Button/ToggleButton';
import { Liquidity, Swap } from '../routes/dex';
import Image from 'next/image';

enum Route {
  SWAP = 'swap',
  LIQUIDITY = 'liquidity'
}

const useDEXSubRoutes = (routes: Route) => {
  const [component, setComponent] = useState(() => Swap);

  useEffect(() => {
    switch (routes) {
      case Route.SWAP:
        setComponent(() => Swap);
        break;
      case Route.LIQUIDITY:
        setComponent(() => Liquidity);
        break;
      default:
        setComponent(() => Swap);
        break;
    }
  }, [routes]);
  return component;
};

export default function Dex() {
  const { query, push } = useRouter();
  const RenderedChild = useDEXSubRoutes(query.tab as Route);
  const route = useMemo(() => (query.tab as Route) || Route.SWAP, [query.tab]);
  return (
    <>
      <Head>
        <title>FrogSwap | DEX</title>
      </Head>
      <div className="flex justify-center items-center flex-col gap-3 my-5">
        {/* <Image src="/frogswap.png" width={150} height={150} alt="Frog Swap Logo" /> */}
        <p className='text-4xl'>Frog Swap</p>
      </div>
      <div className="flex justify-center items-center my-16 px-2 w-full">
        <RenderedChild />
      </div>
    </>
  );
}
