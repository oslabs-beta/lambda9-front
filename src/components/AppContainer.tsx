import React from 'react';
import DiscoverContainer from './DiscoverContainer';
import MyFunctions from './MyFunctions';
import Overview from './Overview';
import styled from 'styled-components';

const AppContainerStyled = styled.div`
  display: flex;
  width: 100%;
`;

const AppContainer: React.FunctionComponent<{}> = props => {
  return (
    <AppContainerStyled>
      <div>
        <MyFunctions />
      </div>
      <div style={{ flex: 1 }}>
        <Overview />
        <DiscoverContainer />
      </div>
    </AppContainerStyled>
  );
};

export default AppContainer;
