import { Navigate } from 'react-router-dom';
import { cookies } from '../../utils/storage';

type LoggedRouteProps = {
  redirect_to?: string;
  children: JSX.Element;
};

function LoggedRoute(props: LoggedRouteProps) {
  const redirect_to = props?.redirect_to || '/';

  if (cookies.logged && redirect_to) {
    return <Navigate to={redirect_to} />;
  }

  return props.children;
}

export default LoggedRoute;
