import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { STab, STabList, STabPanel, STabs } from '../components/common/Tab';

import { Flex } from 'rebass';
import ProjectCard from 'components/ProjectCard';
import Spinner from 'components/Spinner';

import { usePartner } from 'contexts';
import { Partnership, PartnershipStatus } from 'utils/types';

import { StyledContainer as UnstyledContainer, StyledBody, TYPE } from 'theme';

const LayoutGrid = styled.div(
  {
    display: 'grid',
    gridGap: 70,
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  ({ theme }) => ({
    color: theme.black
  }),
  ({ theme }) =>
    theme.mediaWidth.upToSmall({
      color: theme.black,
      gridTemplateColumns: '1fr !important'
    }),
  ({ theme }) =>
    theme.mediaWidth.upToMedium({
      gridTemplateColumns: 'repeat(2, 1fr)'
    })
);

const StyledContainer = styled(UnstyledContainer)({}, ({ theme }) =>
  theme.mediaWidth.upToExtraSmall({
    maxWidth: '100vw !important'
  })
);

interface ITabs {
  title: string;
  key: PartnershipStatus;
}

const Partnerships: FC = () => {
  const { partner, loading, error } = usePartner(
    '0x558bb9391e8600054dd7863144fe44cd270be1f6'
  );

  const [partnerships, setPartnerships] = useState<{
    request: Partnership[];
    accepted: Partnership[];
  }>({
    request: [],
    accepted: []
  });

  const tabs: ITabs[] = [
    { title: 'REQUESTS', key: 'request' },
    { title: 'ACTIVE', key: 'accepted' }
  ];

  useEffect(() => {
    if (!partner) {
      return;
    }
    const newPartnerships = partner.partnershipRequests.reduce(
      (arry, partnership) => {
        const status: PartnershipStatus = partnership.isApproved
          ? 'accepted'
          : 'request';
        return {
          ...arry,
          [status]: [...arry[status], partnership]
        };
      },
      {
        request: [] as Partnership[],
        accepted: [] as Partnership[]
      }
    );
    setPartnerships(newPartnerships);
  }, [partner]);

  return (
    <StyledBody color="bg7">
      <StyledContainer sWidth="85vw">
        <TYPE.LargeHeader color="white" textAlign="center" mb="2rem">
          Your Partnership Projects
        </TYPE.LargeHeader>
        <STabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
          defaultIndex={0}
        >
          <STabList>
            {tabs.map((tab) => (
              <STab key={tab.title}>
                <TYPE.Body color="white" fontWeight="bold">
                  {tab.title}
                </TYPE.Body>
              </STab>
            ))}
          </STabList>
          {tabs.map((tab) => (
            <STabPanel key={tab.key}>
              {partnerships[tab.key].length > 0 ? (
                <LayoutGrid>
                  {partnerships[tab.key].map((partnership) => (
                    <ProjectCard
                      key={partnership.id}
                      partnership={partnership}
                    />
                  ))}
                </LayoutGrid>
              ) : (
                <Flex height="40vh" justifyContent="center" alignItems="center">
                  <TYPE.Header color="grey">
                    There are currently no projects {tab.title.toLowerCase()}.
                  </TYPE.Header>
                </Flex>
              )}
            </STabPanel>
          ))}
        </STabs>
        <Spinner loading={loading} />
      </StyledContainer>
    </StyledBody>
  );
};

export default Partnerships;
