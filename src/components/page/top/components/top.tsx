import Link from 'next/link';
import { FC } from 'react';

import { EXAMPLES_PATH, TASK_PATH } from '../../../../config';
import { Container } from '../../../layouts/container';

import styles from './styles.module.scss';

const Top: FC = () => {
  return (
    <Container>
      <section className={styles.container}>
        <header>
          <h1>React勉強会</h1>
        </header>
        <div className={styles.body}>
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
      </section>
    </Container>
  );
};

export { Top };
