import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';
import React, { ComponentProps, PropsWithChildren, FC } from 'react';

import { getDataAttribute } from '../../../utils';

import styles from './styles.module.scss';

type TProps = PropsWithChildren<LinkProps> & ComponentProps<'a'>;

const Link: FC<TProps> = (props: TProps) => {
  const { id, href, children, onClick, onKeyDown, className }: TProps = props;

  return (
    <NextLink href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        {...getDataAttribute(props)}
        id={id || undefined}
        role="button"
        tabIndex={0}
        onClick={(event) => {
          if (onClick) {
            onClick(event);
          }
        }}
        onKeyDown={onKeyDown}
        className={clsx(styles.container, className)}
      >
        {children}
      </a>
    </NextLink>
  );
};

export { Link };
