import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Profile from './pages/Profile';
import Partnerships from './pages/Partnerships';
import Faq from './pages/Faq';

import Header from 'components/Header';
import Copyright from 'components/common/Copyright';
import ConnectWalletModal from 'components/ConnectWalletModal';
import { useTxModal, useWalletModal } from 'contexts';
import TxModal from 'components/TxModal';

function App() {
  const [{ isOpen }, toggleModal] = useWalletModal();
  const [{ txStatus, txHash }, , , onClose] = useTxModal();
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Profile} exact />
        <Route path="/partnerships" component={Partnerships} exact />
        <Route path="/faq" component={Faq} exact />
      </Switch>
      <Copyright pb="5rem" mt="10rem" />
      <ConnectWalletModal onClose={() => toggleModal(false)} visible={isOpen} />
      <TxModal txStatus={txStatus} txHash={txHash} onClose={onClose} />
    </>
  );
}

export default App;
