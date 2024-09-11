import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import {
  Box,
  Button,
  Divider,
  Checkbox,
  InputLabel,
  IconButton,
  FormControl,
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Typography,
  Paper,
} from '@mui/material';
import {
  AccountCircle,
  LockRounded,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

import LanguageChange from '../../components/LanguageChange';
import { useTranslation } from 'react-i18next';

const LoginWrapper = styled.div`
  position: relative;
  height: 100vh;
  margin: 0 1em;
`;

const LoginContainer = styled(Paper)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  max-width: 360px;
  transform: translate(-50%, -50%);
  padding: 2em 1em 1em 1em;
`;

function Login() {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: ButtonMouseEvent) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e: ButtonMouseEvent) => {
    e.preventDefault();
  };

  return (
    <LoginWrapper>
      <LoginContainer variant="outlined">
        <Typography
          component="div"
          variant="button"
          align="center"
          sx={{ marginBottom: '1.4em', fontSize: '1.2em' }}
        >
          {t('login.title')}
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          <FormControl fullWidth>
            <InputLabel htmlFor="username" required>
              {t('login.username.label')}
            </InputLabel>
            <OutlinedInput
              required
              id="username"
              label={t('login.username.label')}
              placeholder={t('login.username.label')}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel htmlFor="password" required>
              {t('login.password.label')}
            </InputLabel>
            <OutlinedInput
              required
              id="password"
              label={t('login.password.label')}
              placeholder={t('login.password.label')}
              startAdornment={
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              }
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Box
            display="flex"
            alignItems="center"
            sx={{ userSelect: 'none' }}
            justifyContent="space-between"
          >
            <FormControlLabel
              control={<Checkbox />}
              label={t('login.remember_me_text')}
            />

            <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
              <Typography align="right">
                {t('login.forgot_password_link')}
              </Typography>
            </Link>
          </Box>

          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            {t('login.button_login_text')}
          </Button>

          <Divider />
          <LanguageChange />
        </Box>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default Login;
