import React, { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

type TProps = ComponentProps<'img' | 'picture'> & {
  file: string;
  width: number;
  height: number;
  alt: string;
  loading?: 'lazy' | 'eager';
};

const Image: FC<TProps> = (props: TProps) => {
  const { file, width, height, alt, loading, style }: TProps = props;
  const extension = file.split('.').pop();

  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
  const src = require(`../../../../public/images/${file}`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
  const multipleWebp = require(`../../../../public/images/${file}?{sizes:[320,640,960,1280,1600,1920,2240,2560,2880,3200,3520,3840], format: 'webp'}`);
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
  const multipleOrigin = require(`../../../../public/images/${file}?{sizes:[320,640,960,1280,1600,1920,2240,2560,2880,3200,3520,3840]}`);

  if (extension === 'gif') {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        className={styles.image}
      />
    );
  }

  return (
    <picture>
      <source srcSet={multipleWebp.srcSet} type="image/webp" />
      <img
        src={multipleOrigin}
        srcSet={multipleOrigin.srcSet}
        alt={alt || ''}
        width={width}
        height={height}
        loading={loading || 'lazy'}
        decoding="async"
        className={styles.image}
        style={style}
      />
    </picture>
  );
};

export { Image };
