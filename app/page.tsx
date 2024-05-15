import Image from 'next/image';
import clsx from 'clsx';

import Nav from './nav';
import Hamburger from './hamburger';

import bibi1 from './bibi-1.png';
import buyImg from './buy.svg';

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
              'relative flex justify-between pt-20 lg:pt-32',
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
        </main>
      </div>
    </div>
  );
}
