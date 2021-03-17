import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import Card from 'components/common/Card';
import Input from 'components/common/Input';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import Avatar from 'components/common/Avatar';
import Helper from 'components/Helper';
import { StyledBody, StyledContainer, TYPE } from 'theme';

import { usePartner, usePartnerInfo, useConnectedWeb3Context } from 'contexts';
import { PartnerInfo } from 'utils/types';

const Form = styled.form<{ disabled?: boolean }>`
  input {
    ${({ disabled }) => (disabled ? 'padding: 0; border: none !important' : '')}
  }
  textarea {
    ${({ disabled }) => (disabled ? 'padding: 0; border: none !important' : '')}
  }
`;

const Profile: FC = () => {
  const [editable, setEditable] = useState(false);
  const { account } = useConnectedWeb3Context();

  const [profile, setProfile] = useState<PartnerInfo>({
    NAME: '',
    CONTROLLER: account ?? '',
    CONTACT: '',
    INFO: '',
    LOGOHASH: '',
    SOFTCAP_MIN_ETHER: '',
    FEE_BP: '',
    DESCRIPTION: ''
  });
  const { partner } = usePartner(account ?? '');
  const { partnerInfo } = usePartnerInfo(partner?.ipfsHash);

  const onClickBtn = () => {
    if (!editable) {
      setEditable(true);
      return;
    }
  };

  useEffect(() => {
    if (!partnerInfo) {
      return;
    }

    setProfile(partnerInfo);
  }, [partnerInfo]);

  console.log(partnerInfo);
  console.log(profile);

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
          <Form disabled={!editable}>
            <Box mb="1.375rem">
              <Flex justifyContent="space-between">
                <Avatar
                  size="7.5rem"
                  imgSrc={
                    !!profile.LOGOHASH
                      ? `https://ipfs.io/ipfs/${profile.LOGOHASH}`
                      : ''
                  }
                />

                <Button onClick={onClickBtn}>
                  {editable ? 'Save' : 'Edit Profile'}
                </Button>
              </Flex>
            </Box>
            <Box mb="1.375rem">
              <TYPE.Header color="black" lineHeight="1.375rem" mb="0.625rem">
                Your Name:
              </TYPE.Header>
              <Input
                placeholder="CryptoInfluencer"
                type="text"
                value={profile.NAME}
                disabled={!editable}
              />
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
              <Input
                placeholder="cryptoInfluencer.com/contact"
                type="text"
                value={profile.CONTACT}
                disabled={!editable}
              />
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
              <Input
                placeholder="100"
                type="text"
                value={profile.SOFTCAP_MIN_ETHER}
                disabled={!editable}
              />
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
              <Input
                placeholder="3.00"
                type="text"
                value={profile.FEE_BP}
                disabled={!editable}
              />
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
              <Textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed. Feugiat nisl pretium fusce id velit ut. Et magnis dis parturient montes. Fames ac turpis egestas maecenas pharetra convallis posuere morbi."
                value={profile.DESCRIPTION}
                disabled={!editable}
              />
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
              <Input
                placeholder="cryptoInfluencer.com/partnership"
                type="text"
                value={profile.INFO}
                disabled={!editable}
              />
            </Box>
          </Form>
        </Card>
      </StyledContainer>
    </StyledBody>
  );
};

export default Profile;
