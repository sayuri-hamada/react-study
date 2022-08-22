import { AppProps } from 'next/app';
import React, { FC } from 'react';

import { DebugObserver } from '../../debug-observer';
import { useFillHeight } from '../hooks/use-fill-height';

type TProps = AppProps;
export const AppRoot: FC<TProps> = (props: TProps) => {
  const { Component, pageProps, router }: TProps = props;
  // hooks ------------------------------------------
  useFillHeight();

  return (
    <>
      {!process.env.isProduction && <DebugObserver />}
      <Component {...pageProps} key={router.route} />
    </>
  );
};
