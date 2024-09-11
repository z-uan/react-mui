import { Route, Routes } from 'react-router-dom';

import PublicLayout from './PublicLayout';
import PrivateLayout from './PrivateLayout';

import publicRoutes from '../../routes/public.route';
import privateRoutes from '../../routes/private.route';

import LogedRoute from '../../routes/components/LogedRoute';
import PrivateRoute from '../../routes/components/PrivateRoute';

function Layout() {
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
                element={<LogedRoute children={<Component />} />}
              />
            );
          })}
        </Route>

        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default Layout;
