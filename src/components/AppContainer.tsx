import React from "react";
import DiscoverContainer from "./DiscoverContainer";
import MyFunctions from "./MyFunctions";
import Overview from "./Overview";
import styled from "styled-components";
import { colors } from "../utils/index";

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
  display: flex;
  flex-direction: column;
  padding: 1em;
  flex: 0.3;
  height: 100%;
`;

const RightContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`;

const OverviewStyled = styled.div`
  padding: 1em;
  height: 100%;
  flex: 4;
  overflow: scroll;
`;

const DiscoverStyled = styled.div`
  padding: 1em;
  height: 100%;
  flex: 6;
  overflow: scroll;
`;

export default AppContainer;
