import Image from 'next/image';
import clsx from 'clsx';

import Logo from './logo';
import Nav from './nav';
import Hamburger from './hamburger';

import bibi0 from './bibi-0.png';
import bibi1 from './bibi-1.png';
import bibi2 from './bibi-2.png';
import bibi3 from './bibi-3.png';
import bibi4 from './bibi-4.gif';
import bibi5 from './bibi-5.png';
import bibi6 from './bibi-6.png';
import bibi7 from './bibi-7.png';
import buyImg from './buy.svg';
import taxImg from './tax.svg';

export default function Home() {
  return (
    <div className='relative min-h-screen after:multi-[`absolute;inset-0;lg:bg-[size:90%];bg-[url(./bg-bibi-2.gif)];z-[-1];opacity-50`]'>
      <div className='bg-primary'>
        <div className='mx-auto max-w-screen-desktop px-5 sm:px-10 desktop:px-20'>
          <header className='flex items-center justify-between gap-x-12 overflow-hidden py-10 lg:gap-x-16 lg:pb-14 lg:pt-20'>
            <a
              href='/'
              className='block shrink-0 font-pacifico text-6xl text-stroke text-stroke-3 lg:text-[64px]'
            >
              <span className='min-[950px]:hidden'>bibi</span>
              <Logo className='hidden min-[950px]:block' />
            </a>
            <Nav className='max-[730px]:hidden' />
            <div className='hidden max-[730px]:block'>
              <Hamburger />
            </div>
          </header>
        </div>
      </div>

      <div className='h-[5px] bg-black' />

      <div className='relative mx-auto max-w-screen-desktop'>
        <main>
          <div
            id='home'
            className='relative flex justify-between pb-24 pt-20 lg:pt-32'
          >
            <div className='absolute left-[10%] top-1/2 z-0 w-3/5 -translate-y-1/2 bg-primary'>
              <Image src={bibi5} alt='' className='w-full opacity-50' />
            </div>
            <div className='relative z-10 flex flex-1 flex-col px-5 sm:px-10 desktop:px-20'>
              <h1 className='font-pacifico text-7xl text-stroke text-stroke-5'>
                $bibi
              </h1>
              <div className='mt-10 text-balance text-lg !leading-6 md:text-xl lg:mt-16 lg:text-2xl'>
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
            <div className='relative z-10 hidden flex-1 items-end sm:flex'>
              <Image src={bibi1} quality={100} priority alt='' />
            </div>
          </div>

          <div id='about' className='mt-10 flex justify-between md:mt-0'>
            <div className='flex-1 max-[780px]:hidden'>
              <Image src={bibi2} alt='' />
            </div>
            <div className='relative flex-1 overflow-hidden'>
              <div className='absolute top-0 size-full bg-primary md:top-28'>
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
                <div className='mt-10 text-balance pb-10 text-xl !leading-6 lg:text-2xl xl:mt-20'>
                  Leap into the world of BIBI, the memecoin that was founded on
                  a mission to become the most memeable memecoin in existence.
                  Pepe aims to be the ultimate embodiment of internet and crypto
                  culture. With its humor and viral.
                </div>
              </div>
            </div>
          </div>

          <div className='relative pb-16 pt-10 sm:pt-16'>
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
                <Image
                  src={bibi5}
                  alt=''
                  className='hidden min-[1000px]:block'
                />
                <div className='max-w-full shrink-0'>
                  <Image src={taxImg} alt='' className='max-w-full' />
                </div>
              </div>
              <div className='relative z-0 flex justify-end px-5 md:-mt-5 lg:px-10 xl:px-14'>
                <div className='break-all rounded-full border-[6px] border-white bg-secondary px-8 py-4 text-xl sm:px-12 sm:py-8 sm:text-3xl lg:border-[7px] lg:text-4xl xl:border-8 xl:px-16 xl:py-11 xl:text-[40px]'>
                  {process.env.NEXT_PUBLIC_COIN_ADDRESS}
                </div>
              </div>
              <div className='mt-10 flex items-center justify-between gap-x-10 px-5 sm:px-10 md:mt-16 lg:px-20'>
                <div className='hidden justify-end sm:flex'>
                  <Image
                    src={bibi3}
                    alt=''
                    className='max-w-[min(100%,363px)]'
                  />
                </div>
                <Image src={bibi6} alt='' className='max-w-[min(100%,550px)]' />
              </div>
            </div>
          </div>
        </main>
      </div>

      <div id='contact' className='relative overflow-hidden py-20 lg:py-40'>
        <Image src={bibi7} fill alt='' className='object-cover' />
        <div className='relative z-10 mx-auto max-w-screen-desktop px-5 sm:px-10 desktop:px-20'>
          <footer className='max-w-[min(100%,552px)] text-center'>
            <h2 className='whitespace-nowrap font-pacifico text-7xl text-stroke text-stroke-5 lg:text-[5rem] xl:text-8xl'>
              Contact bibi
            </h2>
            <div
              className={clsx(
                'mt-16 flex justify-center gap-x-14 lg:mt-24',
                '*:multi-[inline-block;rounded-full;size-28;bg-white;flex;justify-center;items-center]',
                '[&>*]:sm:multi-[`size-32`]',
                '[&>*]:lg:multi-[`size-40`]',
                '[&_img]:multi-[`size-[70%]`]'
              )}
            >
              <a href={process.env.NEXT_PUBLIC_TELEGRAM_URL} target='_telegram'>
                <img src='/telegram.svg' alt='' />
              </a>
              <a href={process.env.NEXT_PUBLIC_TWITTER_URL} target='_twitter'>
                <img src='/twitter.svg' alt='' />
              </a>
            </div>
            <div className='mt-16 text-4xl sm:text-5xl lg:mt-20 lg:text-6xl xl:text-[64px]'>
              Let&apos;s make history together. Let&apos;s make memecoins great
              again. LFG!
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
