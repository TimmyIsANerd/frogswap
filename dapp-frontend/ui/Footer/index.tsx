import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
// import { FaMedium, FaTelegram } from 'react-icons/fa';
// import { FiInstagram, FiTwitter, FiYoutube, FiGlobe } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="flex flex-col w-full justify-between items-center bg-[#fff]/[.03]">
      <div className="flex flex-col container mx-auto justify-center items-center gap-4 w-full lg:px-12 px-2 py-12">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-3 lg:justify-between lg:items-center w-full px-12">
          <div className="flex flex-col justify-center items-start gap-3">
            <Link href="/">
              <Image src="/frogswap.png" alt="Frog Swap_logo" width={80} height={80} />
            </Link>
            <p className="text-[#b2b2b2] capitalize font-Syne text-[0.85em] w-full lg:w-[19rem]">
              the DApps is an amalgam of traditionally decentralized apps and is an independent product of the Frog Swap ecosystem and should be used with
              utmost discretion.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-5 lg:gap-16">
            <div className="flex flex-col justify-center items-start gap-3 font-Syne capitalize">
              <span className="text-[#b2b2b2] font-[400] text-[0.97em]">pages</span>
              <div className="text-[#fff] flex flex-col justify-center items-start gap-2 text-[0.82em]">
                <Link href="/dex">trade</Link>
                <Link href="/analytics">analytics</Link>
                {/* <Link href="/launchpad">launchpad</Link> */}
                <Link href="/staking">staking</Link>
                {/* <Link href="/multisig">multi-signature</Link>
                <Link href="/bridge">bridge</Link> */}
              </div>
            </div>
            {/* <div className="flex flex-col justify-center items-start gap-3 font-Syne capitalize">
              <span className="text-[#b2b2b2] font-[400] text-[0.97em]">links & community</span>
              <div className="text-[#fff] flex flex-col justify-center items-start gap-2 text-[0.82em]">
                <a href="https://Frog Swapnetwork.org" rel="noreferrer" target="_blank">
                  website
                </a>
                <a href="https://twitter.com/Frog Swap_official?s=20&t=Nyz3yLS_sKZ0asOgOl3NGw" rel="noreferrer" target="_blank">
                  twitter
                </a>
                <a href="https://t.me/Frog Swap_official" rel="noreferrer" target="_blank">
                  telegram
                </a>
                <a href="https://medium.com/@Frog Swap.official" rel="noreferrer" target="_blank">
                  medium
                </a>
                <a href="https://www.youtube.com/channel/UCXMsXe5AvNSPL32Yna8MKdQ" rel="noreferrer" target="_blank">
                  youtube
                </a>
                <a href="https://instagram.com/Frog Swap.official" rel="noreferrer" target="_blank">
                  instagram
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start lg:items-center w-full border-t border-[#797979] px-4 py-4 gap-3">
        <span className="font-Poppins text-[#aeaeae] text-[0.85em] capitalize">copyright &copy; 2023. all rights reserved.</span>
        {/* <div className="flex justify-start items-center gap-2 text-[#fff]">
          <a href="https://Frog Swapnetwork.org" rel="noreferrer" target="_blank">
            <button className="rounded-full px-3 py-3">
              <FiGlobe />
            </button>
          </a>
          <a href="https://twitter.com/Frog Swap_official?s=20&t=Nyz3yLS_sKZ0asOgOl3NGw" rel="noreferrer" target="_blank">
            <button className="rounded-full px-3 py-3">
              <FiTwitter />
            </button>
          </a>
          <a href="https://t.me/Frog Swap_official" rel="noreferrer" target="_blank">
            <button className="rounded-full px-3 py-3">
              <FaTelegram />
            </button>
          </a>
          <a href="https://medium.com/@Frog Swap.official" rel="noreferrer" target="_blank">
            <button className="rounded-full px-3 py-3">
              <FaMedium />
            </button>
          </a>
          <a href="https://www.youtube.com/channel/UCXMsXe5AvNSPL32Yna8MKdQ" rel="noreferrer" target="_blank">
            <button className="rounded-full px-3 py-3">
              <FiYoutube />
            </button>
          </a>
          <a href="https://instagram.com/Frog Swap.official" rel="noreferrer" target="_blank">
            <button className="rounded-full px-3 py-3">
              <FiInstagram />
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
}
