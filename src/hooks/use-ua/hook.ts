import { useEffect, useState } from 'react';
import UAParser from 'ua-parser-js';

import { TUseUa } from './type';

export const useUa = (): TUseUa => {
  const uaParser: UAParser = new UAParser();

  // useState ------------------------------------------
  const [ua, updateUa] = useState<TUseUa | undefined>(undefined);

  // useEffect ------------------------------------------
  useEffect(() => {
    updateUa({
      browser: uaParser.getBrowser(),
      device: uaParser.getDevice(),
      os: uaParser.getOS(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ua;
};
