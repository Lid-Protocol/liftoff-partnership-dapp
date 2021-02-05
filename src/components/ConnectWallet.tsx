import React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

import { TYPE } from 'theme';
import imgWallet from 'assets/pngs/connect-wallet.png';

const StyledImage = styled.img`
  max-width: 100%;
`;

const ConnectWallet = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        flex="1"
      >
        <StyledImage src={imgWallet} alt="wallet connect" />
        <TYPE.LargeHeader mt="3rem" textAlign="center">
          PlEASE CONNECT TO YOUR WALLET FIRST
        </TYPE.LargeHeader>
      </Flex>
    </>
  );
};

export default ConnectWallet;
