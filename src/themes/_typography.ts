import { ThemeOptions } from '@mui/material';

import themeColors from './_color';

const themeTypographies: ThemeOptions['typography'] = {
  fontFamily: 'Roboto, Arial, sans-serif',
  body1: {
    color: themeColors?.textColor,
    fontSize: '0.875rem', // 14px
    lineHeight: 1.15,
  },
  body2: {
    fontSize: '0.875rem', // 14px
    color: themeColors?.textColor,
  },
  h1: {
    fontSize: '2rem', // 32px
    color: themeColors?.textColor,
  },
  h2: {
    fontSize: '1.5rem', // 24px
    color: themeColors?.textColor,
  },
  h3: {
    fontSize: '1.25rem', // 20px
    color: themeColors?.textColor,
  },
  h4: {
    fontSize: '1rem', // 16px
    color: themeColors?.textColor,
  },
  h5: {
    fontSize: '0.875rem', // 14px
    color: themeColors?.textColor,
  },
  h6: {
    fontSize: '0.75rem', // 12px
    color: themeColors?.textColor,
  },
  subtitle1: {
    fontSize: '1rem', // 16px
    color: themeColors?.textColor,
  },
  subtitle2: {
    fontSize: '0.875rem', // 14px
    color: themeColors?.textColor,
  },
  caption: {
    fontSize: '0.75rem', // 12px
    color: themeColors?.textColor,
  },
  overline: {
    fontSize: '0.625rem', // 10px
    color: themeColors?.textColor,
  },
};

export default themeTypographies;
