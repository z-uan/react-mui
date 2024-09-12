import {
  Theme as MUITheme,
  ThemeOptions as MUIThemeOptions,
} from '@mui/material/styles';

type BaseTheme = {
  color?: {
    background?: {
      light?: string
    }
  };
};

declare module '@mui/material/styles' {
  interface Theme extends MUITheme, BaseTheme {}

  interface ThemeOptions extends MUIThemeOptions, BaseTheme {}
}
