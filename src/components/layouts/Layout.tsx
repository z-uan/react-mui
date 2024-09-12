import { Route, Routes } from 'react-router-dom';

import PublicLayout from './PublicLayout';
import PrivateLayout from './PrivateLayout';

import publicRoutes from '../../routes/public.route';
import privateRoutes from '../../routes/private.route';

import LoggedRoute from '../../routes/components/LoggedRoute';
import PrivateRoute from '../../routes/components/PrivateRoute';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WifiOff } from '@mui/icons-material';

function Layout() {
  const { t } = useTranslation();

  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />}>
          {privateRoutes.map((route: RouteType) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<PrivateRoute children={<Component />} />}
              />
            );
          })}
        </Route>

        <Route element={<PublicLayout />}>
          {publicRoutes.map((route: RouteType) => {
            const Component = route.component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<LoggedRoute children={<Component />} />}
              />
            );
          })}
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

      <Dialog
        maxWidth="xs"
        open={!isNetwork}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle display="flex" gap={1} fontSize={16} marginTop="0.3rem">
          <WifiOff /> {t('errors.network.title')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{t('errors.network.message')}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Layout;
