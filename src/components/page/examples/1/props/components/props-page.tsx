import { NextPage } from 'next';
import Head from 'next/head';

import { Props } from './props';

const PropsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>props</title>
      </Head>
      <Props />
    </>
  );
};

export { PropsPage };
