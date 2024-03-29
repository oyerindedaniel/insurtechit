import { Keys } from '@/types';

export const localStorageName = 'insurtechit';

export const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://insurtechit.vercel.app';

export const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dqm7wwe4d';

export const Colors: Record<Keys, string> & { [key: string]: string } = {
  [Keys.HEADER]: 'transparent',
  [Keys.SECTION_1]: 'transparent',
  [Keys.SECTION_2]: '#FFFFFF',
  [Keys.SECTION_3]: '#FFFFFF',
  [Keys.SECTION_4]: '#FFFFFF',
  [Keys.SECTION_5]: '#FFFFFF',
  [Keys.SECTION_6]: '#FFFFFF',
  [Keys.SECTION_7]: '#FFFFFF',
  [Keys.SECTION_8]: '#FFFFFF',
  [Keys.SECTION_9]: '#FFFFFF',
  [Keys.FOOTER]: '#FFFFFF'
};
