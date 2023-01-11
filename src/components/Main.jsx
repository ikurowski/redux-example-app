import React from 'react';
import Box from '@mui/material/Box';
import LoginModal from './LoginModal';

export default function Main() {
  return (
    <main>
      <Box
        sx={{
          p: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <h1>Hello, please login.</h1>
      </Box>
      <LoginModal />
    </main>
  );
}
