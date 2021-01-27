import React, { FC } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import Card from 'components/common/Card';
import Input from 'components/common/Input';
import Textarea from 'components/common/Textarea';
import Button from 'components/common/Button';
import Avatar from 'components/common/Avatar';
import { StyledBody, StyledContainer, TYPE } from 'theme';

const Profile: FC = () => {
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
            <TYPE.Header color="black" lineHeight="1.375rem" mb="0.625rem">
              Your Contact :
            </TYPE.Header>
            <Input placeholder="cryptoInfluencer.com/contact" type="text" />
          </Box>
          <Box mb="1.375rem">
            <TYPE.Header color="black" lineHeight="1.375rem" mb="0.625rem">
              Project’s Minimum Softcap (ETH):
            </TYPE.Header>
            <Input placeholder="100" type="text" />
          </Box>
          <Box mb="1.375rem">
            <TYPE.Header color="black" lineHeight="1.375rem" mb="0.625rem">
              Partnership Fee (%):
            </TYPE.Header>
            <Input placeholder="3.00" type="text" />
          </Box>
          <Box mb="1.375rem">
            <TYPE.Header color="black" lineHeight="1.375rem" mb="0.625rem">
              Partnership Description:
            </TYPE.Header>
            <Textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio pellentesque diam volutpat commodo sed. Feugiat nisl pretium fusce id velit ut. Et magnis dis parturient montes. Fames ac turpis egestas maecenas pharetra convallis posuere morbi." />
          </Box>
          <Box mb="1.375rem">
            <TYPE.Header color="black" lineHeight="1.375rem" mb="0.875rem">
              Partnership Info Link:
            </TYPE.Header>
            <Input placeholder="cryptoInfluencer.com/partnership" type="text" />
          </Box>
        </Card>
      </StyledContainer>
    </StyledBody>
  );
};

export default Profile;
