import { cloudName } from '@/config';
import { ImageTypes } from '@/types';
import buildUrl, { extractPublicId, setConfig } from 'cloudinary-build-url';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

setConfig({
  cloudName
});

export const resizeImage = (url: string, type: ImageTypes) => {
  if (url?.startsWith('https://res.cloudinary.com/')) {
    const publicId = extractPublicId(url);
    switch (type) {
      case 'BACKDROP':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              height: 500,
              type: 'fill'
            },
            effect: 'blur:500',
            format: 'png',
            quality: 30
          }
        });
      case 'TINY':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              width: 100,
              height: 100,
              type: 'thumb'
            },
            format: 'png',
            quality: 50
          }
        });
      case 'SMALL':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              width: 150,
              height: 150,
              type: 'fill'
            },
            format: 'png',
            quality: 60
          }
        });
      case 'MEDIUM':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              width: 500,
              height: 500,
              type: 'fill'
            },
            format: 'png',
            quality: 100
          }
        });
      case 'LARGE':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              width: 700,
              height: 700,
              type: 'fill'
            },
            format: 'png',
            quality: 100
          }
        });
      case 'PLACEHOLDER':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              width: 50,
              height: 50,
              type: 'fill'
            },
            format: 'png',
            effect: 'blur:1000',
            quality: 1
          }
        });
      case 'ORIGINAL':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              height: 2000,
              type: 'fill'
            },
            format: 'png',
            quality: 100
          }
        });
      case 'MEDIUM_UNCROPPED':
        return buildUrl(publicId, {
          transformations: {
            gravity: 'face',
            resize: {
              width: 500,
              type: 'fill'
            },
            format: 'png',
            quality: 100
          }
        });
      default:
        return url;
    }
  } else {
    return url || '';
  }
};
