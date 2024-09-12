import { useTranslation } from 'react-i18next';
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from '@mui/material';

type LanguageChangeProps = {
  sx?: SxProps<Theme>;
};

function LanguageChange(props: LanguageChangeProps) {
  const { i18n } = useTranslation();
  const translations = i18n.getResourceBundle(i18n.language, 'translation');

  const changeLanguage = (e: SelectChangeEvent) => {
    i18n.changeLanguage(e.target.value);
  };

  const languages = Object.entries<string>(translations?.locates || {});

  return (
    <Select
      size="small"
      sx={{
        border: 'none',
        '& .MuiSelect-select': {
          border: 'none',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        minWidth: '120px',
        ...(props.sx || {}),
      }}
      value={i18n.language}
      onChange={changeLanguage}
    >
      {languages.map(([key, value]) => (
        <MenuItem key={key} value={key}>
          {value}
        </MenuItem>
      ))}
    </Select>
  );
}

export default LanguageChange;
