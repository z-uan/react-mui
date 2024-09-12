import React from 'react';

const privateRoutes: RouteType[] = [
  {
    path: '/',
    component: React.lazy(() => import('../containers/Home')),
  },
];

export default privateRoutes;
