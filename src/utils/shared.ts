import utils from './utils';

const shared = {
  Utils: utils,
};

Object.assign(window.globalThis, shared);
Object.assign(window, shared);
