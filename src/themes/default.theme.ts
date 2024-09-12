import { ThemeOptions } from '@mui/material/styles';

const themeDefault: ThemeOptions = {
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.15,
    },
    body2: {
      fontSize: '0.875rem',
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
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: '0',
        },
      },
    },
  },
  palette: {
    error: {
      main: '#d32f2f',
    },
  },
  color: {
    background: {
      light: '#F1F4F9',
    },
  },
};

export default themeDefault;
