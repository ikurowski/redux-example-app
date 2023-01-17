/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-spacing */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import LoginModal from './components/LoginModal';
import { putRequest, getRequest, statusEnum } from './features/statusSlice';

let isInitial = true;

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const cart = useSelector((state) => state.cart);
  const putStatus = useSelector((state) => state.status.putStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(putRequest(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    setShowAlert(true);
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [putStatus]);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  let statusAlert;
  switch (putStatus) {
    case statusEnum.pending:
      statusAlert = (
        <Alert
          sx={{
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '25%',
            zIndex: '1000',
          }}
          severity="info"
        >
          Sending cart data, please wait...
        </Alert>
      );
      break;
    case statusEnum.fulfilled:
      statusAlert = (
        <Alert
          sx={{
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '25%',
            zIndex: '1000',
          }}
          severity="success"
        >
          Cart data updated successfully!
        </Alert>
      );
      break;
    case statusEnum.rejected:
      statusAlert = (
        <Alert
          sx={{
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '25%',
            zIndex: '1000',
          }}
          severity="error"
        >
          Error sending cart data!
        </Alert>
      );
      break;
    default:
      statusAlert = null;
  }

  return (
    <>
      <Header openModal={openModal} />
      {showAlert && statusAlert}
      <Main />
      <LoginModal showModal={showModal} closeModal={closeModal} />
    </>
  );
}

export default App;
