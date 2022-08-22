import { FC } from 'react';

import { TUseGlobalCounter, useGlobalCounter } from '../../../../../stores';

import styles from './styles.module.scss';

const Recoil: FC = () => {
  // hooks ------------------------------------------
  const { counter, increment, decrement }: TUseGlobalCounter =
    useGlobalCounter();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Recoil PAGE</h1>
      <div className={styles.main}>
        <p className={styles.counter}>Redux counter : {counter}</p>
        <ul className={styles.buttonList}>
          <li>
            <button onClick={increment} type="button">
              Increment
            </button>
          </li>
          <li>
            <button onClick={decrement} type="button">
              Decrement
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Recoil };
