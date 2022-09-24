import { NextPage } from 'next';
import Head from 'next/head';

import { Effect } from './effect';

const EffectPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>useRef</title>
      </Head>
      <Effect />
    </>
  );
};

export { EffectPage };
