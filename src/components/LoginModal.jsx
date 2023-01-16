import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal, TextField, Button, Box } from '@mui/material';
import { login } from '../features/authSlice';

// mui

export default function LoginModal({ showModal, closeModal }) {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(login());
    closeModal();
  };

  return (
    <Modal open={showModal} onClose={closeModal}>
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
            label='Just press "Login"'
            placeholder='Just press "Login"'
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
