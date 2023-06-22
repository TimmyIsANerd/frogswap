/* eslint-disable unused-imports/no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ToggleButton from '../ui/Button/ToggleButton';
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
      <div className="flex justify-center items-center py-3 w-full">
        <div className="flex justify-center items-center rounded-[30px] bg-[#fff]/[.11] py-1 px-1">
          <ToggleButton isActive={route === Route.SWAP} onClick={() => push(`/dex?tab=${Route.SWAP}`)}>
            <span>Swap</span>
          </ToggleButton>
          <ToggleButton isActive={route === Route.LIQUIDITY} onClick={() => push(`/dex?tab=${Route.LIQUIDITY}`)}>
            <span>Liquidity</span>
          </ToggleButton>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image src="/frogswap.png" width={150} height={150} alt="Frog Swap Logo" />
      </div>
      <div className="flex justify-center items-center my-10 px-2 w-full">
        <RenderedChild />
      </div>
    </>
  );
}
