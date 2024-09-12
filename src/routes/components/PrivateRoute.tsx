import { Navigate } from 'react-router-dom';
import { cookies } from '../../utils/storage';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps) {
  if (!cookies.logged) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export default PrivateRoute;
