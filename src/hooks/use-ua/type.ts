import { IBrowser, IDevice, IOS } from 'ua-parser-js';

export type TUseUa =
  | undefined
  | {
      browser: IBrowser;
      device: IDevice;
      os: IOS;
    };
