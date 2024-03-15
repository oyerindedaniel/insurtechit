import { cn, resizeImage } from '@/lib/utils';
import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

import { ImageTypes } from '@/types';

export interface ExternalImageProps extends ImageProps {
  src: string;
  alt: string;
  size?: ImageTypes;
  onClick?: () => void;
  objectFit?:
    | 'object-cover'
    | 'object-contain'
    | 'object-none'
    | 'object-fill'
    | 'object-scale-down';
}

const ExternalImage: FC<ExternalImageProps> = ({
  width,
  height,
  src,
  alt,
  className,
  size,
  objectFit,
  onClick,
  ...rest
}) => {
  console.log(width);
  return (
    <Image
      src={size ? resizeImage(src, size || 'MEDIUM') : src}
      alt={alt}
      placeholder="blur"
      className={cn('', objectFit || 'object-cover', className)}
      objectFit={objectFit || 'cover'}
      blurDataURL={resizeImage(src, 'PLACEHOLDER')}
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default ExternalImage;
