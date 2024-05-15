import Image from 'next/image';
import clsx from 'clsx';

import Nav from './nav';
import Hamburger from './hamburger';

import bibi0 from './bibi-0.png';
import bibi1 from './bibi-1.png';
import bibi2 from './bibi-2.png';
import bibi4 from './bibi-4.gif';
import bibi5 from './bibi-5.png';
import buyImg from './buy.svg';
import taxImg from './tax.svg';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-screen-desktop px-5 sm:px-10 desktop:px-20'>
        <header className='flex items-center justify-between gap-x-12 overflow-hidden py-10 lg:gap-x-16 lg:pb-14 lg:pt-20'>
          <a
            href='/'
            className='shrink-0 font-pacifico text-6xl text-stroke text-stroke-3 lg:text-[64px]'
          >
            bibi{' '}
            <span className='hidden min-[850px]:inline-block'>the bear</span>
          </a>
          <Nav className='max-[730px]:hidden' />
          <div className='hidden max-[730px]:block'>
            <Hamburger />
          </div>
        </header>
      </div>

      <div className='h-[5px] bg-black' />

      <div id='home' className='mx-auto max-w-screen-desktop'>
        <main>
          <div
            className={clsx(
              'relative flex justify-between pb-24 pt-20 lg:pt-32',
              'after:multi-[`z-[-1];opacity-50;absolute;inset-0;bg-[url(./bg-bibi-1.gif)];bg-cover;bg-no-repeat`]'
            )}
          >
            <div className='flex flex-1 flex-col px-5 sm:px-10 desktop:px-20'>
              <h1 className='font-pacifico text-7xl text-stroke text-stroke-5'>
                $bibi
              </h1>
              <div className='mt-10 text-balance text-lg md:text-xl lg:mt-16 lg:text-2xl'>
                Bibi the Baby Bear is a meme character associated with BOBO. The
                design of Bibi is baBaby BOBO, and sometimes Pepe the Frog. The
                name “Bibi“ was chosen BOBOwife got pregnant, and has become the
                official name for the character. Bibi is posted worldwide on
                Twitter, 4chan, but particularly on the /biz board (4chan). Bibi
                is an OG Bibi Meme artist, who has been creating Bibi content
                since its inception in 2018.
              </div>
              <div className='mt-auto'>
                <a href={process.env.NEXT_PUBLIC_COIN_URL} target='_buy'>
                  <Image src={buyImg} alt='' />
                </a>
              </div>
            </div>
            <div className='hidden flex-1 items-end sm:flex'>
              <Image src={bibi1} quality={100} priority alt='' />
            </div>
          </div>

          <div id='about' className='mt-10 flex justify-between md:mt-0'>
            <div className='flex-1 max-[780px]:hidden'>
              <Image src={bibi2} alt='' />
            </div>
            <div className='relative flex-1 overflow-hidden'>
              <div className='absolute top-0 size-full md:top-28'>
                <Image
                  src={bibi0}
                  fill
                  alt=''
                  className='object-cover object-top'
                />
              </div>
              <div className='relative z-10 px-10 pt-20 xl:px-20'>
                <h3 className='whitespace-nowrap font-pacifico text-7xl text-stroke text-stroke-5 lg:text-[5rem] xl:text-8xl'>
                  About Bibi
                </h3>
                <div className='mt-10 text-balance pb-10 text-xl lg:text-2xl xl:mt-20'>
                  Leap into the world of BIBI, the memecoin that was founded on
                  a mission to become the most memeable memecoin in existence.
                  Pepe aims to be the ultimate embodiment of internet and crypto
                  culture. With its humor and viral.
                </div>
              </div>
            </div>
          </div>

          <div className='pt-10 sm:pt-16'>
            <div className='mx-auto max-w-screen-desktop'>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex justify-center px-5 sm:justify-end sm:px-10'>
                  <Image
                    src={bibi4}
                    unoptimized
                    alt=''
                    className='max-w-[min(100%,502px)]'
                  />
                </div>
                <div className='invisible max-sm:hidden'></div>
              </div>
            </div>

            <div
              id='tokenmics'
              className='mx-auto mt-20 max-w-screen-desktop px-5'
            >
              <h2 className='whitespace-nowrap pr-20 text-right font-pacifico text-7xl text-stroke text-stroke-5 lg:text-[5rem] xl:text-8xl'>
                Tokenmics
              </h2>
              <div className='relative z-10 mt-5 flex justify-center gap-x-10'>
                <Image src={bibi5} alt='' className='hidden sm:block' />
                <Image src={taxImg} alt='' />
              </div>
              <div className='relative z-0 -mt-5 flex justify-end px-5 lg:px-10 xl:px-14'>
                <div className='break-all rounded-full border-[6px] border-white bg-secondary px-8 py-4 text-xl sm:px-12 sm:py-8 sm:text-3xl lg:border-[7px] lg:text-4xl xl:border-8 xl:px-16 xl:py-11 xl:text-[40px]'>
                  {process.env.NEXT_PUBLIC_COIN_ADDRESS}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
