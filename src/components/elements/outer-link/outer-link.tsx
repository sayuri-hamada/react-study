import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { getDataAttribute } from '../../../utils';

import styles from './styles.module.scss';

type TProps = ComponentProps<'a'>;

const OuterLink: FC<TProps> = (props: TProps) => {
  const { id, href, children, className }: TProps = props;

  return (
    <a
      {...getDataAttribute(props)}
      id={id || undefined}
      className={clsx(styles.container, className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export { OuterLink };
