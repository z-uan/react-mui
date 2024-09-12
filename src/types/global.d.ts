import utils from '../utils/utils';

declare global {
  interface Window {
    Utils: typeof utils;
    isNetwork: boolean;
    globalThis: {
      Utils: typeof utils;
      isNetwork: boolean;
    };
  }
  const Utils: typeof utils;
  const isNetwork: boolean;
}