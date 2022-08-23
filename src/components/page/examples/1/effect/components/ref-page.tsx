import { NextPage } from 'next';
import Head from 'next/head';

import { Effect } from './effect';

const RefPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>useRef</title>
      </Head>
      <Effect />
    </>
  );
};

export { RefPage };
