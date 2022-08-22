import Link from 'next/link';
import { FC } from 'react';

import { TASK_PATH } from '../../../../config';

import styles from './styles.module.scss';

const Top: FC = () => {
  return (
    <section className={styles.container}>
      <header>
        <h1>React勉強会</h1>
      </header>
      <section>
        <h2>課題</h2>
        <ul>
          <li>
            <Link href={`/${TASK_PATH}/count-up`}>カウントアップ</Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

export { Top };
