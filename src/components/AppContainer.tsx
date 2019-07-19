import React from "react";
import DiscoverContainer from "./DiscoverContainer";
import MyFunctions from "./MyFunctions";
import Overview from "./Overview";
import styled from "styled-components";

const AppContainer: React.FunctionComponent<{}> = props => {
  return (
    <AppContainerStyled>
      <LeftContainerStyled>
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
`;

const LeftContainerStyled = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 1em;
  flex: 0.3;
`;

const RightContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const OverviewStyled = styled.div`
  border: 1px solid black;
  padding: 1em;
  flex: 1;
`;

const DiscoverStyled = styled.div`
  border: 1px solid black;
  padding: 1em;
  flex: 0.5;
`;

export default AppContainer;
