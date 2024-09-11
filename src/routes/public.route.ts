import Login from '../containers/Guest/Login';
import PasswordForgot from '../containers/Guest/PasswordForgot';
import PasswordRecovery from '../containers/Guest/PasswordRecovery';

const publicRoutes: RouteType[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/forgot-password',
    component: PasswordForgot,
  },
  {
    path: '/password-recovery',
    component: PasswordRecovery,
  },
];

export default publicRoutes;
