import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import Card from 'components/common/Card';
import Input from 'components/common/Input';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import Avatar from 'components/common/Avatar';
import Helper from 'components/Helper';
import { StyledBody, StyledContainer, TYPE } from 'theme';

import { usePartner, usePartnerInfo } from 'contexts';
import { PartnerInfo } from 'utils/types';

const Profile: FC = () => {
  const [editable, setEditable] = useState(false);
  //TODO: use user's wallet address
  const { partner, loading, error } = usePartner(
    '0x558bb9391e8600054dd7863144fe44cd270be1f6'
  );
  const { partnerInfo } = usePartnerInfo(partner?.ipfsHash);

  console.log('partnerInfo', partnerInfo);

  return (
    <StyledBody color="bg7">
      <StyledContainer sWidth="800px">
        <TYPE.LargeHeader color="white" textAlign="center">
          Your Profile
        </TYPE.LargeHeader>
        <TYPE.Body color="white" textAlign="center" mt="1.5rem">
          The information you provide here will be shown to the projects to
          learn about your partnership services.
        </TYPE.Body>
        <Card paddingX="1.625rem" paddingY="2.25rem" mt="3.75rem">
          <Box mb="1.375rem">
            <Flex justifyContent="space-between">
              <Avatar size="7.5rem" />
              <Button>Save</Button>
            </Flex>
          </Box>
          <Box mb="1.375rem">
            <TYPE.Header color="black" lineHeight="1.375rem" mb="0.625rem">
              Your Name:
            </TYPE.Header>
            <Input placeholder="CryptoInfluencer" type="text" />
          </Box>
          <Box mb="1.375rem">
            <Flex mb="0.625rem" alignItems="center">
              <TYPE.Header color="black" lineHeight="1.375rem" mr="0.5rem">
                Your Contact :
              </TYPE.Header>
              <Helper
                width="275px"
                helperText="Link for projects to connect you such as Telegram, Discord, email, etc."
              />
            </Flex>
            <Input placeholder="cryptoInfluencer.com/contact" type="text" />
          </Box>
          <Box mb="1.375rem">
            <Flex mb="0.625rem" alignItems="center">
              <TYPE.Header color="black" lineHeight="1.375rem" mr="0.5rem">
                Project’s Minimum Softcap (ETH):
              </TYPE.Header>
              <Helper
                width="275px"
                helperText="Minimum softcap for the sale. Set to prevent low softcap spam."
              />
            </Flex>
            <Input placeholder="100" type="text" />
          </Box>
          <Box mb="1.375rem">
            <Flex mb="0.625rem" alignItems="center">
              <TYPE.Header color="black" lineHeight="1.375rem" mr="0.5rem">
                Partnership Fee (%):
              </TYPE.Header>
              <Helper
                width="520px"
                helperText="Fee of total sale. To be taken from project developer’s ETH. Reduced by insurance redemptions. Automatically paid to the partner at 10% per week."
              />
            </Flex>
            <Input placeholder="3.00" type="text" />
          </Box>
          <Box mb="1.375rem">
            <Flex mb="0.625rem" alignItems="center">
              <TYPE.Header color="black" lineHeight="1.375rem" mr="0.5rem">
                Partnership Description:
              </TYPE.Header>
              <Helper
                width="275px"
                helperText="Please provide at least 2-3 sentences describing the partnership service."
              />
            </Flex>
            <Textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed. Feugiat nisl pretium fusce id velit ut. Et magnis dis parturient montes. Fames ac turpis egestas maecenas pharetra convallis posuere morbi." />
          </Box>
          <Box mb="1.375rem">
            <Flex mb="0.875rem" alignItems="center">
              <TYPE.Header color="black" lineHeight="1.375rem" mr="0.5rem">
                Partnership Info Link:
              </TYPE.Header>
              <Helper
                width="365px"
                helperText="Link to information about the partnership services."
              />
            </Flex>
            <Input placeholder="cryptoInfluencer.com/partnership" type="text" />
          </Box>
        </Card>
      </StyledContainer>
    </StyledBody>
  );
};

export default Profile;
