'use client';

import MovingText from 'react-moving-text';

interface LogoProps extends React.ComponentProps<'div'> {}

export default function Logo(props: LogoProps) {
  return (
    <div {...props}>
      <div className='flex gap-x-5'>
        {'bibi the bear'.split(' ').map((letter, index) => (
          <MovingText
            key={index}
            type='bounce'
            duration='1000ms'
            delay={`${index * 100}ms`}
            direction='normal'
            timing='ease'
            iteration='infinite'
            fillMode='none'
          >
            {letter}
          </MovingText>
        ))}
      </div>
    </div>
  );
}
