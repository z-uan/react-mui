/* eslint-disable react-refresh/only-export-components */
import React, { Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Shared
import './utils/shared';

// i18Next config
import './i18next/i18next.config';

// Loading layout
import LoadingFullscreen from './components/Loading/Fullscreen';

// App
const App = React.lazy(() => import('./App'));

// MUI custom theme
import initialTheme from './themes';
import { Theme } from '@mui/material';

const queryClient = new QueryClient();

function InitialApp() {
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const themeData = await initialTheme();
        setTheme(themeData);
      } catch {
        // Load theme failed
      }
    };

    loadTheme();
  }, []);

  if (!theme) {
    return <LoadingFullscreen />;
  }

  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingFullscreen />}>
          <BrowserRouter>
            <App theme={theme} />
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </CookiesProvider>
  );
}

createRoot(document.getElementById('xhl-corp')!).render(<InitialApp />);
