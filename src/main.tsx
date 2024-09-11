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
import SkeletonLayout from './components/layouts/SkeletonLayout';

// App
const App = React.lazy(() => import('./App'));

// MUI custom theme
const queryClient = new QueryClient();

const root = document.getElementById('root')!;

createRoot(root).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SkeletonLayout />}>
        <BrowserRouter children={<App />} />
      </Suspense>
    </QueryClientProvider>
  </CookiesProvider>,
);
