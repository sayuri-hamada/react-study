import { NextPage } from 'next';
import Head from 'next/head';

import { State } from './state';

const StatePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>useState</title>
      </Head>
      <State />
    </>
  );
};

export { StatePage };
