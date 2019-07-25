import React from 'react';
import DiscoverContainer from './DiscoverContainer';
import MyFunctions from './MyFunctions';
import Overview from './Overview';
import styled from 'styled-components';
import { colors } from '../utils/index';

import { Line } from 'react-chartjs-2';

const AppContainer: React.FunctionComponent<{}> = props => {
  return (
    <AppContainerStyled>
      <LeftContainerStyled>
        <h2>My Functions</h2>
        <MyFunctions />
      </LeftContainerStyled>

      <RightContainerStyled>
        <OverviewStyled>
          <Overview />
        </OverviewStyled>

        <DiscoverStyled>
          <DiscoverContainer />
        </DiscoverStyled>
      </RightContainerStyled>
    </AppContainerStyled>
  );
};

const AppContainerStyled = styled.div`
  display: flex;
  flex: 1;
  margin: 0em 1em;
`;

const LeftContainerStyled = styled.div`
  h2 {
    font-weight: 700;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  padding: 1em;
  flex: 0.2;
  height: 97%;
  margin-right: 1em;
`;

const RightContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const OverviewStyled = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1em;
  height: 100%;
  flex: 5;
  overflow: scroll;
  border-radius: 7px;
  max-width: 1000px;
`;

const DiscoverStyled = styled.div`
  margin: 1rem 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 1em;
  flex: 5;
  overflow: scroll;
  border-radius: 7px;
  max-width: 1000px;
`;

export default AppContainer;
