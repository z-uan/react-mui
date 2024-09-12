import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Typography,
  Alert,
  Card,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { AccountCircleOutlined } from '@mui/icons-material';

import { cookies } from '../../utils/storage';
import LanguageChange from '../../components/LanguageChange';
import accountService from '../../services/account.service';
import { TextField } from '../../components/Form';

const FORGOT_PASSOWRD_FORM_WIDTH = 560;

const PasswordForgotWrapper = styled('div')<{ isMobile: boolean }>(
  ({ theme: { palette, color }, isMobile }) => ({
    background: isMobile ? color?.white : palette?.background?.default,
    position: 'relative',
    padding: '1rem',
    minHeight: '100vh',
    transition: 'all .2s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
);

const PasswordForgotContainer = styled('div')({
  // position: 'absolute',
  // left: '50%',
  // top: '50%',
  width: '100%',
  maxWidth: `${FORGOT_PASSOWRD_FORM_WIDTH}px`,
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
  pointerEvents: 'none',
  userSelect: 'none',
});

function PasswordForgot() {
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
  const isMobile = useMediaQuery(
    theme.breakpoints.down(FORGOT_PASSOWRD_FORM_WIDTH),
  );

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

      <PasswordForgotWrapper isMobile={isMobile}>
        <PasswordForgotContainer>
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
              sx={{ marginBottom: '0.7rem', fontWeight: 500 }}
            >
              {t('forgot_password.title')}
            </Typography>

            <Typography
              variant="subtitle2"
              color="textSecondary"
              sx={{ marginBottom: '1rem', fontWeight: 400 }}
            >
              {t('forgot_password.subtitle')}
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
                  defaultValue={cookies.remember?.username || ''}
                  rules={{ required: 'forgot_password.username.required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      required
                      id="username"
                      error={!!errors.username}
                      label={t('forgot_password.username.label')}
                      placeholder={t('forgot_password.username.label')}
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

              <Button
                variant="contained"
                size="large"
                color="info"
                type="submit"
              >
                {t('forgot_password.button_forgot_password_text')}
              </Button>

              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}
              >
                <Button variant="text" fullWidth color="secondary" size="small">
                  {t('forgot_password.back_to_login_link')}
                </Button>
              </Link>
            </Box>
          </Card>
          <LanguageChange
            sx={{
              marginTop: '0.25rem',
              marginLeft: isMobile ? '0.2rem' : '',
            }}
          />
        </PasswordForgotContainer>
      </PasswordForgotWrapper>
    </>
  );
}

export default PasswordForgot;
