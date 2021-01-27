import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const STabs = styled(Tabs)`
  width: 100%;
`;

export const STabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin: 0;
  border-bottom: 1px solid #b4b4b4;
`;

export const STab = styled(Tab)`
  padding: 20px 0;
  user-select: none;
  text-align: center;
  cursor: pointer;
  width: 250px;

  ${({ theme }) =>
    theme.mediaWidth.upToSmall({
      width: 100
    })}

  &.is-selected {
    border-bottom: 8px solid #b4b4b4;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }
`;

export const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 20px 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
