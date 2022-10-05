import { FC, MutableRefObject, useState, useRef, useEffect } from 'react';

import { IMAGE_PATH } from '../../../../../config';
import { Container } from '../../../../layouts/container';

import styles from './styles.module.scss';

const IMAGE_NUM = 5;
const IMAGE_TIMER = 1000;

const CountUp: FC = () => {
  console.log('自動更新の時間', IMAGE_TIMER);

  //カウント用びStateを追加
  const [counter, updateCounter] = useState<number>(0);

  // カウンアップの値を格納するためのref
  const counterRef: MutableRefObject<number> = useRef(0);
  counterRef.current = counter;

  //自動更新のタイマーのref
  const timerRef: MutableRefObject<number> = useRef(0);

  //自動更新切り替え用のStateを追加
  const [dataActive, upadateDataActive] = useState<boolean>(false);

  //自動切り替え用関数
  const autoUpdate = (): void => {
    counterRef.current < IMAGE_NUM - 1
      ? updateCounter(counterRef.current + 1)
      : updateCounter(0);
    timerRef.current = window.setTimeout(autoUpdate, IMAGE_TIMER);
  };

  //タイマーをクリア
  const clearTimer = (): void => {
    window.clearTimeout(timerRef.current);
    upadateDataActive(false);
  };

  //カウントアップ用関数
  const nextCount = (): void => {
    clearTimer();
    counterRef.current < IMAGE_NUM - 1
      ? updateCounter(counterRef.current + 1)
      : updateCounter(0);
  };
  //カウントダウン用関数
  const prevCount = (): void => {
    clearTimer();
    counterRef.current < 1
      ? updateCounter(IMAGE_NUM - 1)
      : updateCounter(counterRef.current - 1);
  };

  //自動切り替え用State変更関数
  const swichDataActive = (): void => {
    dataActive ? upadateDataActive(false) : upadateDataActive(true);
  };

  //自動更新切り替えのState更新タイミングでカウントアップの関数を呼び出し
  useEffect(() => {
    window.clearTimeout(timerRef.current);
    dataActive &&
      (timerRef.current = window.setTimeout(autoUpdate, IMAGE_TIMER));
  }, [dataActive]);

  return (
    <Container isShowTopButton title="カウントアップ">
      <div className={styles.main}>
        <div className={styles.image}>
          <img src={`${IMAGE_PATH}img_${counterRef.current + 1}.jpg`} alt="" />
        </div>
        <ul className={styles.buttonList}>
          <button onClick={prevCount} className={styles.button}>
            PREV
          </button>
          <p>
            {counterRef.current + 1}/{IMAGE_NUM}
          </p>
          <button onClick={nextCount} className={styles.button}>
            NEXT
          </button>
        </ul>
        <button
          onClick={swichDataActive}
          className={styles.button}
          data-is-active={dataActive}
        >
          自動更新
        </button>
      </div>
    </Container>
  );
};

export { CountUp };
