import { useCallback } from 'react';
import { atom, RecoilState, useRecoilState } from 'recoil';

// atom ------------------------------------------
/**
 * counterの値を管理するatom
 * @type {RecoilState<number>}
 */
export const counterState: RecoilState<number> = atom<number>({
  key: 'counter',
  default: 0,
});

// hooks ------------------------------------------
export type TUseGlobalCounter = {
  counter: number;
  increment: () => void;
  decrement: () => void;
};

/**
 * グローバルstateで管理するcounter
 * @returns {TUseGlobalCounter}
 */
export const useGlobalCounter = (): TUseGlobalCounter => {
  // atom ------------------------------------------
  const [counter, setCounter] = useRecoilState(counterState);

  // useCallback ------------------------------------------
  const increment = useCallback(() => {
    setCounter(counter + 1);
  }, [counter, setCounter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
  }, [counter, setCounter]);

  return {
    counter,
    increment,
    decrement,
  };
};
