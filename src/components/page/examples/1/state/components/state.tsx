import { FC, useState } from 'react';

import { Container } from '../../../../../layouts/container';

import styles from './styles.module.scss';

const State: FC = () => {
  // カウントアップ用のstateを追加
  const [counter, updateCounter] = useState<number>(0);

  return (
    <Container isShowTopButton title="useState">
      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            // 1ずつカウントアップ
            updateCounter(counter + 1);
          }}
          className={styles.button}
        >
          stateを更新
        </button>
      </div>
    </Container>
  );
};

export { State };
