import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';

import { Container } from '../../../../../layouts/container';

import styles from './styles.module.scss';

const Effect: FC = () => {
  // カウントアップ用のstateを追加
  const [counter, updateCounter] = useState<number>(0);

  // カウンアップの値を格納するためのref
  const counterRef: MutableRefObject<number> = useRef(0);
  counterRef.current = counter;

  // buttonのDOMを取得するためのref
  const buttonRef: MutableRefObject<HTMLButtonElement> = useRef(
    {} as HTMLButtonElement
  );

  // stateの場合はuseEffectは呼ばれる
  useEffect(() => {
    console.log('useStateの値', counter);
    console.log('useStateの値', '再レンダリング');
  }, [counter]);

  // refの場合はuseEffectは呼ばれない
  useEffect(() => {
    console.log('useRefの値', counterRef.current);
    console.log('useRefの値', '再レンダリング');
  }, [counterRef]);

  useEffect(() => {
    console.log('第2引数が空の場合、初回レンダリング時に呼ばれる');
    console.log('ref経由でDOMを取得する', buttonRef.current);
  }, []);

  return (
    <Container isShowTopButton title="useEffect">
      <div>
        <p>{counterRef.current}</p>
        <p>{counter}</p>
        <button
          onClick={() => {
            // 1ずつカウントアップ
            updateCounter(counter + 1);
          }}
          className={styles.button}
          ref={buttonRef}
        >
          stateを更新
        </button>
      </div>
    </Container>
  );
};

export { Effect };
