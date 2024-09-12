import { ThemeOptions } from '@mui/material/styles';
import { Colors } from './_color';

const themePalettes: ThemeOptions['palette'] = {
  primary: {
    main: Colors.deepPurple[500],
    light: Colors.deepPurple[400],
    dark: Colors.deepPurple[600],
    contrastText: Colors.common.white,
  },
  secondary: {
    main: Colors.blueGrey[600],
    light: Colors.blueGrey[500],
    dark: Colors.blueGrey[700],
    contrastText: Colors.common.white,
  },
  error: {
    main: Colors.red[600],
    light: Colors.red[500],
    dark: Colors.red[700],
    contrastText: Colors.common.white,
  },
  warning: {
    main: Colors.orange[400],
    light: Colors.orange[300],
    dark: Colors.orange[500],
    contrastText: Colors.common.white,
  },
  info: {
    main: Colors.lightBlue[600],
    light: Colors.lightBlue[500],
    dark: Colors.lightBlue[700],
    contrastText: Colors.common.white,
  },
  success: {
    main: Colors.green[600],
    light: Colors.green[500],
    dark: Colors.green[700],
    contrastText: Colors.common.white,
  },
  background: {
    paper: Colors.common.white,
    default: '#F1F4F9',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export default themePalettes;
