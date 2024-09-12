import { Button } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { cookies } from '../../utils/storage';

function PrivateLayout() {
  const navigate = useNavigate()

  const onLogout = () => {
    cookies.removeDataLogged()
    navigate('/login', {
      replace: true,
    });
  }

  return (
    <>
      <Button onClick={onLogout}>Logout</Button>
      <Outlet />
    </>
  );
}

export default PrivateLayout;
