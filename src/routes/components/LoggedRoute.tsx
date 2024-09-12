import { Navigate } from 'react-router-dom';
import { cookies } from '../../utils/storage';

type LoggedRouteProps = {
  redirect_to?: string;
  children: JSX.Element;
};

function LoggedRoute(props: LoggedRouteProps) {
  if (!cookies.logged) {
    return props.children;
  }

  return <Navigate to={props?.redirect_to || '/'} />;
}

export default LoggedRoute;
