import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'menu'> {
  isHamburger?: boolean;
}

export default function Nav({isHamburger, className, ...rest}: NavProps) {
  return (
    <menu
      {...rest}
      className={clsx(className, 'drop-shadow-default', {
        'text-3xl [&_a]:multi-[`block;py-1.5`]': isHamburger,
        'flex items-end gap-x-8 lg:gap-x-12 pt-7 text-3xl lg:text-4xl':
          !isHamburger,
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
