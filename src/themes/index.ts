import { createTheme, ThemeOptions } from '@mui/material/styles';
import themeTypographies from './_typography';
import themeComponents from './_components';
import themePalettes from './_palette';
import themeColors from './_color';

const themeOptions: ThemeOptions = {
  typography: themeTypographies,
  components: themeComponents,
  palette: themePalettes,
  color: themeColors,
};

export default createTheme(themeOptions);
