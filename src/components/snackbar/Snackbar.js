import { Snackbar as MSnackbar, Alert } from '@mui/material';

export default function Snackbar({ state, setState }) {
  const { vertical, horizontal, open, message, variant } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <MSnackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      key={vertical + horizontal}
      message={message}
      sx={{ marginTop: '60px' }}
    >
      <Alert onClose={handleClose} severity={variant} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MSnackbar>
  );
}
