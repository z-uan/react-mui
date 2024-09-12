import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  Checkbox,
  IconButton,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Typography,
  Alert,
  Card,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import {
  AccountCircleOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
  LockOutlined,
} from '@mui/icons-material';

import { cookies } from '../../utils/storage';
import LanguageChange from '../../components/LanguageChange';
import accountService from '../../services/account.service';
import { TextField } from '../../components/Form';

const LOGIN_FORM_WIDTH = 560;

const LoginWrapper = styled('div')<{ isMobile: boolean }>(
  ({ theme: { palette, color }, isMobile }) => ({
    background: isMobile ? color?.white : palette?.background?.default,
    transition: 'all .2s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100dvh',
  }),
);

const LoginContainer = styled('div')({
  // position: 'absolute',
  // left: '50%',
  // top: '50%',
  width: '100%',
  maxWidth: `${LOGIN_FORM_WIDTH}px`,
  // transform: 'translate(-50%, -50%)',
  transition: 'all .2s',
});

const LogoImg = styled('img')({
  border: 'none',
  boxShadow: 'none',
  marginBottom: '1.5rem',
  verticalAlign: 'middle',
  maxWidth: '124px',
  minWidth: '124px',
  width: '124px',
  height: '90px',
  minHeight: '90px',
  pointerEvents: 'none',
  userSelect: 'none',
});

function Login() {
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down(LOGIN_FORM_WIDTH));

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: ButtonMouseEvent) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e: ButtonMouseEvent) => {
    e.preventDefault();
  };

  const mutationLogin = useMutation(
    (payload: LoginType) => accountService.login(payload),
    {
      onSuccess: ({ data, code, errors }) => {
        if (data && code === 'OK') {
          cookies.setLogin(data);
          navigate('/', {
            replace: true,
          });
        } else if (Object.keys(errors || {}).length > 0) {
          Object.entries(errors || {}).forEach(([name, error]) => {
            setError(name as keyof LoginType, {
              message: `login.${error}`,
              type: 'error',
            });
          });
        } else {
          setErrorMsg('errors.server');
        }
      },
      onError: () => {
        setErrorMsg('errors.server');
      },
    },
  );

  const onSubmit = (data: LoginType) => {
    if (data.remember) {
      cookies.setRemember(data);
    } else {
      cookies.removeRemember();
    }
    mutationLogin.mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>{t('login.title')} - XHL Corp</title>
      </Helmet>

      <LoginWrapper isMobile={isMobile}>
        <LoginContainer>
          <Card
            elevation={0}
            sx={{
              padding: isMobile ? '2rem 1rem 0' : '2rem',
              borderRadius: isMobile ? '0' : '1.25rem',
              transition: 'all .2s',
            }}
          >
            <LogoImg src="/logo.png" alt="XHL Corp Logo" />

            <Typography
              variant="h1"
              fontSize="2rem"
              sx={{ marginBottom: '1rem', fontWeight: 500 }}
            >
              {t('login.title')}
            </Typography>

            {errorMsg && (
              <Alert severity="error" sx={{ marginBottom: '1rem' }}>
                <Typography fontSize={14}>{t(errorMsg)}</Typography>
              </Alert>
            )}

            <Box
              component="form"
              display="flex"
              flexDirection="column"
              gap={1}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl fullWidth margin="normal">
                <Controller
                  name="username"
                  control={control}
                  defaultValue={cookies.remember?.username || ''}
                  rules={{ required: 'login.username.required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      id="username"
                      error={!!errors.username}
                      label={t('login.username.label')}
                      placeholder={t('login.username.label')}
                      helperText={t(errors.username?.message || '')}
                      color="info"
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircleOutlined />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <Controller
                  name="password"
                  control={control}
                  defaultValue={cookies.remember?.password || ''}
                  rules={{ required: 'login.password.required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      id="password"
                      error={!!errors.password}
                      label={t('login.password.label')}
                      placeholder={t('login.password.label')}
                      helperText={t(errors.password?.message || '')}
                      type={showPassword ? 'text' : 'password'}
                      color="info"
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockOutlined />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                disableRipple
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                sx={{
                                  padding: '0.1rem 0 0 0',
                                }}
                              >
                                {showPassword ? (
                                  <VisibilityOffOutlined />
                                ) : (
                                  <VisibilityOutlined />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  )}
                />
              </FormControl>

              <Box
                display="flex"
                alignItems="center"
                sx={{ userSelect: 'none' }}
                justifyContent="space-between"
              >
                <Controller
                  name="remember"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <FormControlLabel
                      {...field}
                      sx={{
                        marginBottom: '-0.1rem',
                      }}
                      control={
                        <Checkbox
                          defaultChecked={cookies.remember?.remember || false}
                          color="info"
                        />
                      }
                      label={t('login.remember_me_text')}
                      defaultChecked={cookies.remember?.remember || false}
                    />
                  )}
                />

                <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
                  <Typography align="right" color="info">
                    {t('login.forgot_password_link')}
                  </Typography>
                </Link>
              </Box>

              <Button
                variant="contained"
                size="large"
                color="info"
                type="submit"
                sx={{
                  marginBottom: '1rem',
                }}
              >
                {t('login.button_login_text')}
              </Button>
            </Box>
          </Card>
          <LanguageChange
            sx={{
              marginTop: '0.25rem',
              marginLeft: isMobile ? '0.2rem' : '',
            }}
          />
        </LoginContainer>
      </LoginWrapper>
    </>
  );
}

export default Login;
