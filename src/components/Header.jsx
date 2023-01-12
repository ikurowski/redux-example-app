import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

// mui
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { logout } from '../features/authSlice';

export default function Header({ openModal }) {
  const auth = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const loginHandler = () => {
    openModal();
  };

  const loginButton = (
    <Button onClick={loginHandler} color="inherit">
      Login
    </Button>
  );

  const logoutButton = (
    <Button onClick={() => dispatch(logout())} color="inherit">
      Logout
    </Button>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
          }}
        >
          Redux Example
        </Typography>
        {auth ? logoutButton : loginButton}
      </Toolbar>
    </AppBar>
  );
}
