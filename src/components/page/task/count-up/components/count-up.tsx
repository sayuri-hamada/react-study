import Link from 'next/link';
import { FC } from 'react';

import { IMAGE_PATH } from '../../../../../config';

import styles from './styles.module.scss';

const IMAGE_NUM = 5;
const IMAGE_TIMER = 100;

const CountUp: FC = () => {
  console.log('自動更新の時間', IMAGE_TIMER);

  return (
    <section className={styles.container}>
      <Link href="/Users/kentaro/Desktop/_works/_ZIZO/develop/react-study/src/pages">
        TOP
      </Link>
      <h1>カウントアップ</h1>
      <div className={styles.main}>
        <div className={styles.image}>
          <img src={`${IMAGE_PATH}img_1.jpg`} alt="" />
        </div>
        <ul className={styles.buttonList}>
          <button className={styles.button}>PREV</button>
          <p>1/{IMAGE_NUM}</p>
          <button className={styles.button}>NEXT</button>
        </ul>
        <button className={styles.button} data-is-active={false}>
          自動更新
        </button>
      </div>
    </section>
  );
};

export { CountUp };
