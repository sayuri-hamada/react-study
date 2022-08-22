import { NextPage } from 'next';
import Head from 'next/head';

import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '../../../../../config';
import { Helmet } from '../../../../head';
import { Recoil } from './recoil';

const RecoilPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Recoil | ${SITE_TITLE}`}</title>
        <Helmet
          siteName={SITE_TITLE}
          title={SITE_TITLE}
          description={SITE_DESCRIPTION}
          ogType="article"
          ogUrl={SITE_URL}
          ogImage={OG_IMAGE_URL}
        />
      </Head>
      <Recoil />
    </div>
  );
};

export { RecoilPage };
