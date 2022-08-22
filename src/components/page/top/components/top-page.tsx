import { NextPage } from 'next';
import Head from 'next/head';

import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '../../../../config';
import { Helmet } from '../../../head';
import { Top } from './top';

const TopPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`TOP | ${SITE_TITLE}`}</title>
        <Helmet
          siteName={SITE_TITLE}
          title={SITE_TITLE}
          description={SITE_DESCRIPTION}
          ogType="website"
          ogUrl={SITE_URL}
          ogImage={OG_IMAGE_URL}
        />
      </Head>
      <Top />
    </>
  );
};

export { TopPage };
