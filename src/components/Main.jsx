import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

// components
import Products from './Products';
import Cart from './Cart';

export default function Main() {
  const auth = useSelector((state) => state.auth.authenticated);
  return (
    <main>
      <Box
        bgcolor="#eee"
        sx={{
          minHeight: 'calc(100vh - 64px)',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {auth ? (
          <>
            <Cart />
            <Products />
          </>
        ) : (
          <h1>Hello, please login.</h1>
        )}
      </Box>
    </main>
  );
}
