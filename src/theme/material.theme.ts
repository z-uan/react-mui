import { createTheme } from '@mui/material/styles';

// Fonts
import RobotoThin from './fonts/roboto/Roboto-Thin.ttf';
import RobotoLight from './fonts/roboto/Roboto-Light.ttf';
import RobotoRegular from './fonts/roboto/Roboto-Regular.ttf';
import RobotoMedium from './fonts/roboto/Roboto-Medium.ttf';
import RobotoBold from './fonts/roboto/Roboto-Bold.ttf';

const themeOptions = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      fontSize: '0.875em',
      lineHeight: 1,
    },
    body2: {
      fontSize: '0.875em',
      lineHeight: 1,
    },
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.25rem',
    },
    h4: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.875rem',
    },
    h6: {
      fontSize: '0.75rem',
    },
    subtitle1: {
      fontSize: '1rem',
    },
    subtitle2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
    },
    overline: {
      fontSize: '0.625rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: /*css*/ `
        @font-face {
          font-family: "Roboto";
          font-display: swap;
          src: url(${RobotoThin}) format("truetype");
          font-weight: 200;
        }
      
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
  },
};

export default {
  light: createTheme({
    ...themeOptions,
    palette: {},
  }),
};
