import React, { ReactElement, FC } from 'react';

type TProps = {
  path: string;
};

const HeadIcon: FC<TProps> = (props: TProps): ReactElement => {
  const { path }: TProps = props;

  return (
    <>
      <link
        rel="icon"
        type="image/vnd.microsoft.ico"
        href={`${path}favicon.ico`}
      />
      <link rel="apple-touch-icon" href={`${path}apple_touch_icon.png`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${path}apple_touch_icon_180_180.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href={`${path}apple_touch_icon_192_192.png`}
      />
    </>
  );
};

export { HeadIcon };
