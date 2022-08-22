import { NextPage } from 'next';
import Head from 'next/head';

import {
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from '../../../../../config';
import { Helmet } from '../../../../head';
import { CompressImage } from './compress-image';

const CompressImagePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Compress Image | ${SITE_TITLE}`}</title>
        <Helmet
          siteName={SITE_TITLE}
          title={SITE_TITLE}
          description={SITE_DESCRIPTION}
          ogType="article"
          ogUrl={SITE_URL}
          ogImage={OG_IMAGE_URL}
        />
      </Head>
      <CompressImage />
    </div>
  );
};

export { CompressImagePage };
