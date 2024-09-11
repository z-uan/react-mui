// MUI
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// Themes
import { Layout } from './components/layouts';
import materialTheme from './theme/material.theme';

function App() {
  return (
    <ThemeProvider theme={materialTheme.light}>
      <CssBaseline children={<Layout />} />
    </ThemeProvider>
  );
}

export default App;
