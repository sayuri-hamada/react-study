import { FC, MutableRefObject, useRef, useState } from 'react';

import { Container } from '../../../../../layouts/container';

import styles from './styles.module.scss';

const Ref: FC = () => {
  // カウントアップ用のstateを追加
  const [counter, updateCounter] = useState<number>(0);

  // カウンアップの値を格納するためのref
  const counterRef: MutableRefObject<number> = useRef(0);
  counterRef.current = counter;

  // buttonのDOMを取得するためのref
  const buttonRef: MutableRefObject<HTMLButtonElement> = useRef(
    {} as HTMLButtonElement
  );

  return (
    <Container isShowTopButton title="useRef">
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

export { Ref };
