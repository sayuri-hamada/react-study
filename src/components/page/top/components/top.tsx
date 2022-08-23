import Link from 'next/link';
import { FC } from 'react';

import { EXAMPLES_PATH, TASK_PATH } from '../../../../config';
import { Container } from '../../../layouts/container';

import styles from './styles.module.scss';

const Top: FC = () => {
  return (
    <Container title="React勉強会">
      <div className={styles.main}>
        <section className={styles.block}>
          <h2>実装例</h2>
          <ul>
            <li>
              <Link href={`${EXAMPLES_PATH}1/props`}>props</Link>
            </li>
          </ul>
        </section>
        <section className={styles.block}>
          <h2>課題</h2>
          <ul>
            <li>
              <Link href={`${TASK_PATH}count-up`}>カウントアップ</Link>
            </li>
          </ul>
        </section>
      </div>
    </Container>
  );
};

export { Top };
