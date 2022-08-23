import { FC, ReactElement } from 'react';

import { TopButton } from '../../elements';

import styles from './styles.module.scss';

type TProps = {
  isShowTopButton?: boolean;
  children: ReactElement;
};

const Container: FC<TProps> = (props: TProps) => {
  const { children, isShowTopButton }: TProps = props;
  return (
    <div className={styles.container}>
      {isShowTopButton && <TopButton />}
      {children}
    </div>
  );
};

export { Container };
