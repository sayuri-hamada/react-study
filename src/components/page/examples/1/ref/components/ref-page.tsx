import { NextPage } from 'next';
import Head from 'next/head';

import { Ref } from './ref';

const RefPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>useRef</title>
      </Head>
      <Ref />
    </>
  );
};

export { RefPage };
