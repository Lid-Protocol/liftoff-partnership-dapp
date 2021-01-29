import React, { FC } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

import { StyledContainer, StyledBody, TYPE } from '../theme';

const Faq: FC = () => {
  return (
    <StyledBody color="bg7">
      <StyledContainer sWidth="860px">
        <TYPE.LargeHeader>LIFTOFF Partners FAQ</TYPE.LargeHeader>
        <Box mt="5rem">
          <Box mb="2.25rem">
            <TYPE.Header lineHeight="1.625rem">
              What are Liftoff Partners?
            </TYPE.Header>
            <TYPE.Body lineHeight="1.375rem" mt="0.875rem">
              Liftoff Partners are marketing firms and influencer networks that
              are registered on the decentralized Liftoff Partnerships smart
              contract. These partners review partnership requests from projects
              launching on Liftoff. If the project meets the standards of the
              partner, the partner accepts the partnership and promotes the
              project.
            </TYPE.Body>
          </Box>
          <Box mb="2.25rem">
            <TYPE.Header lineHeight="1.625rem">
              How are Liftoff Partners paid?
            </TYPE.Header>
            <TYPE.Body lineHeight="1.375rem" mt="0.875rem">
              Partners are paid directly from the Liftoff sales they are
              partnered with. They receive a portion of the project developer’s
              eth allocation. This payment is distributed 10%/week over 10 weeks
              and reduced proportionately by Liftoff Insurance redemptions.
            </TYPE.Body>
          </Box>
          <Box mb="2.25rem">
            <TYPE.Header lineHeight="1.625rem">
              How does my agency/network become a Liftoff Partner?
            </TYPE.Header>
            <TYPE.Body lineHeight="1.375rem" mt="0.875rem">
              Contact the Lid team on Discord or Telegram along with your
              service name, description, rates, logo, and ethereum wallet
              address for managing details. The Liftoff team will then review
              your request and add your service to the Liftoff Partners smart
              contract if accepted.
            </TYPE.Body>
          </Box>
          <Box mb="2.25rem">
            <TYPE.Header lineHeight="1.625rem">
              How do Project Developers request new Partnerships?
            </TYPE.Header>
            <TYPE.Body lineHeight="1.375rem" mt="0.875rem">
              Project developers can do so by connecting the wallet they
              launched their Liftoff token with to this dapp. Developers will
              need to carefully review the available partners to see which will
              suit your project. It’s wise for developers to contact partners
              before sending requests, as some partners do extensive vetting and
              will want to discuss the project before forming a partnership.
            </TYPE.Body>
          </Box>
          <Box mb="2.25rem">
            <TYPE.Header lineHeight="1.625rem">
              How do Liftoff Partners accept Partnership requests?
            </TYPE.Header>
            <TYPE.Body lineHeight="1.375rem" mt="0.875rem">
              Partners connect the ethereum wallet they gave to the Lid team to
              manage their partnerships and requests on this dapp. If the
              partner’s wallet has changed, they should contact the Lid team for
              assistance. A signed message from the previous wallet will usually
              be required.
            </TYPE.Body>
          </Box>
        </Box>
      </StyledContainer>
    </StyledBody>
  );
};

export default Faq;
