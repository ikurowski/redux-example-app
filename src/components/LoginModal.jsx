import React from 'react';

// mui
import { Modal, TextField, Button, Box } from '@mui/material';

export default function LoginModal() {
  function loginHandler() {
    console.log('login');
  }

  return (
    <Modal open>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
          p: 6,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '50%',
          margin: 'auto',
        }}
      >
        <form>
          <TextField
            id="standard-basic"
            label="Username"
            fullWidth
            margin="normal"
          />
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />
        </form>
        <Button variant="contained" color="primary" onClick={loginHandler}>
          Login
        </Button>
      </Box>
    </Modal>
  );
}
