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
        sx={{
          p: 8,
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
