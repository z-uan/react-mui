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

const LoginWrapper = styled('div')(({ theme: { color } }) => ({
  background: color?.background?.light,
  position: 'relative',
  padding: '0 1rem',
  height: '100vh',
}));

const LoginContainer = styled('div')({
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '100%',
  maxWidth: '560px',
  transform: 'translate(-50%, -50%)',
});

const LogoImg = styled('img')({
  border: 'none',
  boxShadow: 'none',
  marginBottom: '1.5rem',
  verticalAlign: 'middle',
  maxWidth: '124px',
  minWidth: '124px',
  width: '124px',
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
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        if (code === 'OK') {
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
    mutationLogin.mutate(data);
  };

  return (
    <>
      <Helmet>
        <title>{t('login.title')} - XHL Corp</title>
      </Helmet>

      <LoginWrapper>
        <LoginContainer>
          <Card
            elevation={0}
            sx={{
              padding: '2rem',
              borderRadius: '1.25rem',
            }}
          >
            <LogoImg src="/logo.png" alt="XHL Corp Logo" />

            <Typography
              variant="h2"
              sx={{ marginBottom: '1rem', fontWeight: 400 }}
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
              gap={2}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormControl fullWidth margin="normal">
                <Controller
                  name="username"
                  control={control}
                  defaultValue=""
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
                  defaultValue=""
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
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
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
                      control={<Checkbox />}
                      label={t('login.remember_me_text')}
                    />
                  )}
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
                sx={{
                  marginBottom: '1rem',
                }}
              >
                {t('login.button_login_text')}
              </Button>
            </Box>
          </Card>
          <LanguageChange sx={{ marginTop: '0.25rem' }} />
        </LoginContainer>
      </LoginWrapper>
    </>
  );
}

export default Login;
