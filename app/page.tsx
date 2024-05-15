import Image from 'next/image';

import Nav from './nav';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <div className='mx-auto max-w-screen-desktop desktop:px-20'>
        <header className='flex items-center justify-between pb-12 pt-20'>
          <a
            href='/'
            className='font-pacifico text-[64px] text-stroke text-stroke-3'
          >
            bibi the bear
          </a>
          <Nav />
        </header>
      </div>
      <div className='h-[5px] bg-black' />
    </div>
  );
}
