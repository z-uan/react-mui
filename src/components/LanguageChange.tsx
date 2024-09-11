import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';
import { Box, Typography } from '@mui/material';

function LanguageChange() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'zh' : 'vi');
  };

  return (
    <Box
      gap={0.5}
      display="flex"
      alignItems="center"
      onClick={changeLanguage}
      sx={{ cursor: 'pointer' }}
    >
      <TranslateIcon color={i18n.language === 'zh' ? 'primary' : 'inherit'} />
      <Typography color={i18n.language === 'zh' ? 'primary' : 'inherit'} fontSize={14}>
        {t(`locates.${i18n.language}`)}
      </Typography>
    </Box>
  );
}

export default LanguageChange;
