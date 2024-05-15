import Image from 'next/image';

import Nav from './nav';
import Hamburger from './hamburger';

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
    </div>
  );
}
