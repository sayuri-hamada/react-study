import { NextPage } from 'next';
import Head from 'next/head';

import { Top } from './top';

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>React Study</title>
      </Head>
      <Top />
    </>
  );
};

export { TopPage };
