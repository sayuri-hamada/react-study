import { ComponentProps, FC } from 'react';

import styles from './styles.module.scss';

// ◎ ComponentProps
// タグ名を指定することで指定したタグのpropsを引き継げる
// 「本来のタグとして振る舞ってほしいコンポーネント」の場合、Props の型定義は頑張らない
// 参考 : https://zenn.dev/takepepe/articles/atoms-type-definitions
type TProps = ComponentProps<'button'> & {
  // 色情報を渡すためのprops
  color: 'red' | 'blue' | 'orange';
  // ボタンのdisableの設定をするかのprops（必須ではない）
  isDisable?: boolean;
};

const Button: FC<TProps> = (props: TProps) => {
  const { children, color, isDisable }: TProps = props;

  return (
    <button
      className={styles.button}
      data-color={color}
      data-is-disable={typeof isDisable !== 'undefined' ? isDisable : false}
    >
      {children}
    </button>
  );
};

export { Button };
