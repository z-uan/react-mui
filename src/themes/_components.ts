import { ThemeOptions } from '@mui/material/styles';

// Fonts
import RobotoBold from './fonts/roboto/Roboto-Bold.ttf';
import RobotoLight from './fonts/roboto/Roboto-Light.ttf';
import RobotoMedium from './fonts/roboto/Roboto-Medium.ttf';
import RobotoRegular from './fonts/roboto/Roboto-Regular.ttf';

const themeComponents: ThemeOptions['components'] = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '0.25rem',
        textTransform: 'none',
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '0.25rem',
      },
      notchedOutline: {
        borderRadius: '0.25rem',
      },
    },
  },

  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: '0',
      },
    },
  },

  MuiCssBaseline: {
    styleOverrides: /* css */ `
      @font-face {
        font-family: "Roboto";
        font-display: swap;
        src: url(${RobotoLight}) format("truetype");
        font-weight: 300;
      }

      @font-face {
        font-family: "Roboto";
        font-display: swap;
        src: url(${RobotoRegular}) format("truetype");
        font-weight: 400;
      }

      @font-face {
        font-family: "Roboto";
        font-display: swap;
        src: url(${RobotoMedium}) format("truetype");
        font-weight: 500;
      }

      @font-face {
        font-family: "Roboto";
        font-display: swap;
        src: url(${RobotoBold}) format("truetype");
        font-weight: 700;
      }
    `,
  },
};

export default themeComponents;
