import React from 'react';
import Popular from './DiscoverContainer/Popular';
import Recent from './DiscoverContainer/Recent';
import styled from 'styled-components';

const DiscoverContainer: React.FunctionComponent<{}> = props => {
  return (
    <Container>
      <HeaderStyled>Discover</HeaderStyled>
      <DiscoverStyled>
        <Popular />
        <Recent />
      </DiscoverStyled>
    </Container>
  );
};

const Container = styled.div``;

const DiscoverStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const HeaderStyled = styled.h1`
  font-weight: 700;
  margin-bottom: 0rem;
`;

export default DiscoverContainer;
