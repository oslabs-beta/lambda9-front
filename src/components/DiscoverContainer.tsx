import React from "react";
import Popular from "./DiscoverContainer/Popular";
import Recent from "./DiscoverContainer/Recent";
import styled from "styled-components";

const DiscoverContainer: React.FunctionComponent<{}> = props => {
  return (
    <DiscoverStyled>
      <Popular />
      <Recent />
    </DiscoverStyled>
  );
};

const DiscoverStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export default DiscoverContainer;
