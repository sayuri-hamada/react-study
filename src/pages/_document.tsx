import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React, { ReactElement } from 'react';

import { HeadIcon } from '../components/head';
import { GTM_FRAME, GTM_SCRIPT, ICON_PATH } from '../config';

export default class CustomDocument extends NextDocument {
  /**
   * ページロード時にデータを取得する場合などに使う
   * @param context
   */

  public static async getInitialProps(
    context: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(context);

    return { ...initialProps };
  }

  public render(): ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <script dangerouslySetInnerHTML={{ __html: GTM_SCRIPT }} />
          <meta name="format-detection" content="telephone=no" />
          <HeadIcon path={ICON_PATH} />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: GTM_FRAME }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
