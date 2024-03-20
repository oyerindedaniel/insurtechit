import { Inter, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

export const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
  //   display: 'swap'
});

export const fontPoppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['500', '600']
  //   display: 'swap'
});
