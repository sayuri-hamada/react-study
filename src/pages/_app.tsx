import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC, ReactElement, StrictMode } from 'react';

import 'ress/dist/ress.min.css';
import { SITE_TITLE } from '../config';
import '../styles/base/_global.scss';
import '../styles/base/_reset.scss';

type TProps = AppProps;

const Container: FC<TProps> = (props: TProps): ReactElement<TProps> => {
  const { Component, pageProps, router }: TProps = props;

  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StrictMode>
        <Component {...pageProps} key={router.route} />
      </StrictMode>
    </>
  );
};

export default Container;
