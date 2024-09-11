import { Navigate } from 'react-router-dom';

type LogedRouteProps = {
  redirect_to?: string;
  children: JSX.Element;
};

function LogedRoute(props: LogedRouteProps) {
  const isAuthenticated = false;

  if (isAuthenticated && props?.redirect_to) {
    return <Navigate to={props?.redirect_to} />;
  }

  return props.children;
}

export default LogedRoute;
