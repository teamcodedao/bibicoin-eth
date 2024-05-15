import clsx from 'clsx';

interface NavProps {
  isHamburger?: boolean;
}

export default function Nav({isHamburger}: NavProps) {
  return (
    <menu
      className={clsx('text-4xl drop-shadow-default', {
        '': isHamburger,
        'flex gap-x-12': !isHamburger,
      })}
    >
      <li>
        <a href='/#home'>Home</a>
      </li>
      <li>
        <a href='/#about'>About</a>
      </li>
      <li>
        <a href='/#tokenmics'>Tokenmics</a>
      </li>
      <li>
        <a href='/#social'>Social</a>
      </li>
    </menu>
  );
}
