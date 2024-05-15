import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
      },
      fontFamily: {
        pacifico: ['var(--pacifico-font)'],
      },
      colors: {
        primary: '#627EEA',
        secondary: '#D30006',
      },
      dropShadow: {
        default: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [
    require('tailwindcss-multi'),
    plugin(function ({addUtilities, matchUtilities, theme}) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
          'paint-order': 'stroke fill',
        },
      });
      matchUtilities(
        {
          'text-stroke': (value: any) => ({
            '-webkit-text-stroke-width': value,
          }),
        },
        {
          values: {
            ...theme('strokeWidth'),
            3: 3,
            4: 4,
            5: 5,
          },
        }
      );
    }),
  ],
};
export default config;
