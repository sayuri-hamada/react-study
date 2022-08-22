import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React, { ReactElement } from 'react';

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
          <meta name="format-detection" content="telephone=no" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
