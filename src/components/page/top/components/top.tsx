import Link from 'next/link';
import { FC } from 'react';

import { EXAMPLES_PATH } from '../../../../config';

import styles from './styles.module.scss';

const Top: FC = () => {
  return (
    <section className={styles.container}>
      <h1>React勉強会</h1>
      <ul>
        <li>
          <Link href={`/${EXAMPLES_PATH}/count-up`}>カウントアップ</Link>
        </li>
      </ul>
    </section>
  );
};

export { Top };
