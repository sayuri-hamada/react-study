import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC, ReactElement, StrictMode } from 'react';
import { RecoilRoot } from 'recoil';

import 'ress/dist/ress.min.css';
import { SITE_TITLE } from '../config';
import { AppRoot } from '../features/app-root';
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
        <RecoilRoot>
          <AppRoot
            pageProps={pageProps}
            Component={Component}
            router={router}
          />
        </RecoilRoot>
      </StrictMode>
    </>
  );
};

// レンダリングを検知するための処理
if (
  typeof window !== 'undefined' &&
  !process.env.isProduction &&
  process.env.isDebugMode
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

export default Container;
