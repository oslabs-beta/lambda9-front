import React from "react";
import DiscoverContainer from "./DiscoverContainer";
import MyFunctions from "./MyFunctions";
import Overview from "./Overview";
import styled from "styled-components";

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
  border: 2px red solid;
  display: flex;
  flex: 1;
`;

const LeftContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 6px solid #e056fd;
  padding: 1em;
  flex: 0.3;
  height: 100%;
  overflow: scroll;
`;

const RightContainerStyled = styled.div`
  display: flex;
  border: 3px gray solid;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const OverviewStyled = styled.div`
  border: 3px solid purple;
  padding: 1em;
  flex: 1;
`;

const DiscoverStyled = styled.div`
  border: 3px solid yellow;
  padding: 1em;
  flex: 1;
`;

export default AppContainer;
