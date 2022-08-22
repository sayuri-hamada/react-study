import Link from 'next/link';
import { FC } from 'react';

import { ABSOLUTE_PATH } from '../../../config';

import styles from './styles.module.scss';

const TopButton: FC = () => {
  return (
    <Link href={ABSOLUTE_PATH}>
      <a className={styles.container}>TOP</a>
    </Link>
  );
};

export { TopButton };
