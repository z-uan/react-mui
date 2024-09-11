import utils from '../utils/utils';

declare global {
  interface Window {
    Utils: typeof utils;
    globalThis: {
      Utils: typeof utils;
    };
  }
  const Utils: typeof utils;
}
