// MUI
import MUITheme from './themes';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { Layout } from './components/layouts';
import useNetwork from './utils/hooks/useNetwork';

function App() {
  const isNetwork = useNetwork();

  window.globalThis.isNetwork = isNetwork;
  window.isNetwork = isNetwork;

  return (
    <ThemeProvider theme={MUITheme}>
      <CssBaseline children={<Layout />} />
    </ThemeProvider>
  );
}

export default App;
