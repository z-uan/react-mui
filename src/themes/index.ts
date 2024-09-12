import { createTheme } from '@mui/material/styles';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

let name = localStorage.getItem('theme') || 'default';

if (!['default', 'dark'].includes(name)) {
  name = 'default';
}

export default async function initialTheme() {
  try {
    const jsonTheme = await import(`./${name}.theme.ts`);
    return createTheme(jsonTheme.default);
  } catch {
    return createTheme({});
  }
}
