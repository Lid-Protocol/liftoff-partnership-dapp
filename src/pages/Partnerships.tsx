import React from 'react';
import styled from 'styled-components';
import { STab, STabList, STabPanel, STabs } from '../components/common/Tab';

import { Flex } from 'rebass';
import CardState from 'components/CardState';
import Spinner from 'components/Spinner';

import { useProjects } from 'contexts/useProjects';
import { PartnershipStatus } from 'utils/types';

import {
  StyledContainer as UnstyledContainer,
  StyledBody,
  TYPE
} from '../theme';

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

const Partnerships = () => {
  const { projects, loading, error } = useProjects();

  const tabs: ITabs[] = [
    { title: 'REQUESTS', key: 'request' },
    { title: 'ACTIVE', key: 'accepted' }
  ];

  console.log(projects, loading, error);

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
          {/* {tabs.map((tab) => (
              <STabPanel key={tab.key}>
                {projects[tab.key].length > 0 ? (
                  <LayoutGrid>
                    {projects[tab.key].map((project) => (
                      <CardState
                        key={project.id}
                        type={tab.key}
                        project={project}
                      />
                    ))}
                  </LayoutGrid>
                ) : (
                  <Flex
                    height="40vh"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <TYPE.Header color="grey">
                      There are currently no projects {tab.title.toLowerCase()}.
                    </TYPE.Header>
                  </Flex>
                )}
              </STabPanel>
            ))} */}
        </STabs>
        <Spinner loading={loading} />
      </StyledContainer>
    </StyledBody>
  );
};

export default Partnerships;
