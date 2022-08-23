import { FC, ReactElement } from 'react';

import { TopButton } from '../../elements';

import styles from './styles.module.scss';

type TProps = {
  title: string;
  children: ReactElement;
  isShowTopButton?: boolean;
};

const Container: FC<TProps> = (props: TProps) => {
  const { title, children, isShowTopButton }: TProps = props;
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      {isShowTopButton && <TopButton />}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export { Container };
