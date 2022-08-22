import { NextPage } from 'next';
import Head from 'next/head';

import { CountUp } from './count-up';

const CountUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>カウントアップ</title>
      </Head>
      <CountUp />
    </>
  );
};

export { CountUpPage };
