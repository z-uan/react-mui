import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from '@mui/material/styles';

type ColorBase = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};

type BaseTheme = {
  color?: {
    white?: string;
    textColor?: string;
    common?: {
      black?: string;
      white?: string;
    };
    red?: ColorBase;
    pink?: ColorBase;
    purple?: ColorBase;
    deepPurple?: ColorBase;
    indigo?: ColorBase;
    blue?: ColorBase;
    lightBlue?: ColorBase;
    cyan?: ColorBase;
    teal?: ColorBase;
    green?: ColorBase;
    lightGreen?: ColorBase;
    lime?: ColorBase;
    yellow?: ColorBase;
    amber?: ColorBase;
    orange?: ColorBase;
    deepOrange?: ColorBase;
    brown?: ColorBase;
    grey?: ColorBase;
    blueGrey?: ColorBase;
    background?: {
      light?: string;
    };
  };
};

declare module '@mui/material/styles' {
  interface Theme extends MUITheme, BaseTheme {}

  interface ThemeOptions extends MUIThemeOptions, BaseTheme {}
}
