import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';

import { IMAGE_PATH } from '../../../../../config';
import { Container } from '../../../../layouts/container';

import styles from './styles.module.scss';

const IMAGE_NUM = 5;
const IMAGE_TIMER = 100;

const CountUp: FC = () => {
  // useState ---------------------------
  // 現在の画像のindex値を管理するためのuseState
  const [currentImageIndex, updateCurrentIndex] = useState(0);

  // アップデートボタンが押されたているかのstate
  const [isUpdate, updateTimer] = useState(false);

  // useRef ---------------------------
  // 現在の画像のindex値を格納するためのref
  const currentImageIndexRef = useRef(currentImageIndex);
  currentImageIndexRef.current = currentImageIndex;

  // 自動更新のtimerの値を格納するためのref
  const timerRef: MutableRefObject<number> = useRef<number>(0);

  // functions ---------------------------
  /**
   * 自動更新の関数
   */
  const onUpdate = (): void => {
    const index: number = currentImageIndexRef.current + 1;
    updateCurrentIndex(IMAGE_NUM <= index ? 0 : index);
    timerRef.current = window.setTimeout(onUpdate, IMAGE_TIMER);
  };

  /**
   * タイマーをクリア
   */
  const clearTimer = (): void => {
    window.clearTimeout(timerRef.current);
    updateTimer(false);
  };

  /**
   * Nextボタンが押されたとき
   */
  const onClickNext = (): void => {
    clearTimer();

    const index: number = currentImageIndex + 1;
    updateCurrentIndex(IMAGE_NUM <= index ? 0 : index);
  };

  /**
   * Prevボタンが押されたとき
   */
  const onClickPrev = (): void => {
    clearTimer();

    const index: number = currentImageIndex - 1;
    updateCurrentIndex(index < 0 ? IMAGE_NUM - 1 : index);
  };

  /**
   * 自動更新ボタンが押されたとき
   */
  const onClickUpdate = (): void => {
    window.clearTimeout(timerRef.current);

    if (!isUpdate) {
      timerRef.current = window.setTimeout(onUpdate, IMAGE_TIMER);
    }
    updateTimer(!isUpdate);
  };

  // useEffect ---------------------------
  useEffect(() => {
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Container isShowTopButton title="カウントアップ">
      <div className={styles.main}>
        <div className={styles.image}>
          <img src={`${IMAGE_PATH}img_${currentImageIndex + 1}.jpg`} alt="" />
        </div>
        <ul className={styles.buttonList}>
          <button className={styles.button} onClick={onClickPrev}>
            PREV
          </button>
          <p>
            {currentImageIndex + 1}/{IMAGE_NUM}
          </p>
          <button className={styles.button} onClick={onClickNext}>
            NEXT
          </button>
        </ul>
        <button
          className={styles.button}
          onClick={onClickUpdate}
          data-is-active={isUpdate}
        >
          自動更新
        </button>
      </div>
    </Container>
  );
};

export { CountUp };
