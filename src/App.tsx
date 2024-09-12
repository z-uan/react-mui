// MUI
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Theme } from '@mui/material';

import { Layout } from './components/layouts';
import useNetwork from './utils/hooks/useNetwork';

type AppProps = {
  theme: Theme;
};

function App(props: AppProps) {
  const isNetwork = useNetwork();

  window.globalThis.isNetwork = isNetwork;
  window.isNetwork = isNetwork;

  return (
    <ThemeProvider theme={props.theme}>
      <CssBaseline children={<Layout />} />
    </ThemeProvider>
  );
}

export default App;
