import { FC } from 'react';

import { COMPRESS_IMAGE_PATH_COMMON } from '../../../../../config';
import { Image } from '../../../../elements';

import styles from './styles.module.scss';

const CompressImage: FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Compress Image</h1>
      <Image
        file={`${COMPRESS_IMAGE_PATH_COMMON}img_sample.jpg`}
        width={1920}
        height={1038}
        alt=""
      />
    </section>
  );
};

export { CompressImage };
