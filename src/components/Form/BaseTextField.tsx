import { styled } from '@mui/material';
import TextField from '@mui/material/TextField';

const BaseTextField = styled(TextField)(({ theme: { palette } }) => ({
  '& .MuiFormHelperText-root.Mui-error': {
    position: 'absolute',
    top: '100%',
    left: 0,
    color: palette?.error?.main,
  },
  '& .Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: palette?.error?.main,
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: palette?.error?.main,
  },
  '& .MuiFormLabel-asterisk.Mui-error': {
    color: palette?.error?.main,
  },
}));

export default BaseTextField;
