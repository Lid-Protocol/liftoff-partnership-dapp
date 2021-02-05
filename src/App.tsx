import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Profile from './pages/Profile';
import Partnerships from './pages/Partnerships';
import Partners from './pages/Partners';
import Faq from './pages/Faq';

import Header from 'components/Header';
import Copyright from 'components/common/Copyright';
import ConnectWallet from 'components/ConnectWallet';
import ConnectWalletModal from 'components/ConnectWalletModal';
import { useTxModal, useWalletModal, useConnectedWeb3Context } from 'contexts';
import TxModal from 'components/TxModal';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const { account } = useConnectedWeb3Context();
  const [{ isOpen }, toggleModal] = useWalletModal();
  const [{ txStatus, txHash }, , , onClose] = useTxModal();
  return (
    <StyledWrapper>
      <Header />
      {!!account ? (
        <>
          <Switch>
            <Route path="/" component={Profile} exact />
            <Route path="/partnerships" component={Partnerships} exact />
            <Route path="/partners" component={Partners} exact />
            <Route path="/faq" component={Faq} exact />
          </Switch>
        </>
      ) : (
        <ConnectWallet />
      )}
      <Copyright pb="5rem" mt="5rem" />
      <ConnectWalletModal onClose={() => toggleModal(false)} visible={isOpen} />
      <TxModal txStatus={txStatus} txHash={txHash} onClose={onClose} />
    </StyledWrapper>
  );
}

export default App;
