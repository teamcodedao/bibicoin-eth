import type {Metadata} from 'next';
import {Gluten, Pacifico} from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

const font = Gluten({
  subsets: ['latin'],
  display: 'swap',
});

const pacificoFont = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--pacifico-font',
  display: 'block',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATABASE_URL),
  title: '$BIBI Is Flipping Daddy $BOBO',
  description:
    'Bibi the Baby Bear is a meme character associated with BOBO. The design of Bibi is baBaby BOBO, and sometimes Pepe the Frog. The name “Bibi“ was chosen BOBOwife got pregnant, and has become the official name for the character. Bibi is posted worldwide on Twitter, 4chan, but particularly on the /biz board (4chan). Bibi is an OG Bibi Meme artist, who has been creating Bibi content since its inception in 2018.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(font.className, pacificoFont.variable)}>
        {children}
      </body>
    </html>
  );
}
