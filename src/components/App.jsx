import React from 'react';
import Layout from './Layout/Layout';
import Snake from './Snake/Snake';
import Food from './Food/Food';

import InviteModal from './Modal/Modal';
// import Modal from 'react-modal';

const App = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <>
      <InviteModal />
      <Layout />
      <Food />
      <Snake />
    </>
  );
};

export default App;
