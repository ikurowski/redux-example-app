import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import LoginModal from './components/LoginModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <Header openModal={openModal} />
      <Main />
      <LoginModal showModal={showModal} closeModal={closeModal} />
    </>
  );
}

export default App;
