import Link from 'next/link';
import {
  FC,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { IMAGE_PATH } from '../../../../../config';

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

  const clearTimer = (): void => {
    window.clearTimeout(timerRef.current);
    updateTimer(false);
  };

  // useCallback ---------------------------
  /**
   * Nextボタンが押されたとき
   * @type {() => void}
   */
  const onClickNext = useCallback((): void => {
    clearTimer();

    const index: number = currentImageIndex + 1;
    updateCurrentIndex(IMAGE_NUM <= index ? 0 : index);
  }, [currentImageIndex]);

  /**
   * Prevボタンが押されたとき
   * @type {() => void}
   */
  const onClickPrev = useCallback((): void => {
    clearTimer();

    const index: number = currentImageIndex - 1;
    updateCurrentIndex(index < 0 ? IMAGE_NUM - 1 : index);
  }, [currentImageIndex]);

  /**
   * 自動更新ボタンが押されたとき
   * @type {() => void}
   */
  const onClickUpdate = useCallback(
    () => {
      window.clearTimeout(timerRef.current);

      if (!isUpdate) {
        timerRef.current = window.setTimeout(onUpdate, IMAGE_TIMER);
      }
      updateTimer(!isUpdate);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentImageIndex, isUpdate]
  );

  // useEffect ---------------------------
  useEffect(() => {
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section className={styles.container}>
      <Link href="/Users/kentaro/Desktop/_works/_ZIZO/develop/react-study/src/pages">
        TOP
      </Link>
      <h1>カウントアップ</h1>
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
    </section>
  );
};

export { CountUp };
