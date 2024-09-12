/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// Shared
import './utils/shared';

// i18Next config
import './i18next/i18next.config';

// Loading layout
import LoadingFullscreen from './components/Loading/Fullscreen';

// App
const App = React.lazy(() => import('./App'));

const queryClient = new QueryClient();

createRoot(document.getElementById('xhl-corp')!).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingFullscreen />}>
        <BrowserRouter children={<App />} />
      </Suspense>
    </QueryClientProvider>
  </CookiesProvider>,
);
