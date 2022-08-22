import { FC, ReactElement } from 'react';

import styles from './styles.module.scss';

type TProps = {
  children: ReactElement;
};

const Container: FC<TProps> = (props: TProps) => {
  const { children }: TProps = props;
  return <div className={styles.container}>{children}</div>;
};

export { Container };
