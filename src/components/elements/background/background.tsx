import clsx from 'clsx';
import { FC } from 'react';

import { Image } from '../image';
import { TBackgroundImage } from './type';

import styles from './styles.module.scss';

type TProps = {
  image: TBackgroundImage;
  className?: string;
  fit?: 'fill' | 'cover' | 'contain';
  position?: string;
  size?: 'full' | 'auto';
};

const Background: FC<TProps> = (props: TProps) => {
  const { image, fit, position, size, className }: TProps = props;

  return (
    <div
      className={clsx(styles.container, className)}
      data-image-fit={fit || 'cover'}
      data-image-size={size || 'auto'}
    >
      <Image
        alt=""
        file={image.file}
        style={{
          objectPosition: position || 'center center',
        }}
        width={image.width}
        height={image.height}
      />
    </div>
  );
};

export { Background };
