import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertMessage = ({ error, success, setError, setSuccess, message, setLoading }) => {
  const handleClose = () => {
    setLoading(false);
    setSuccess(false);
    setError(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '30%', margin: '0 auto' }}>
      <Snackbar
        open={success}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleClose}
        autoHideDuration={2000}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>

      <Snackbar
        open={error}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        onClose={handleClose}
        autoHideDuration={2000}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>
    </Stack>
  );
};
export default AlertMessage;
