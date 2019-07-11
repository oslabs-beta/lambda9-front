import React from 'react';
import styled from 'styled-components';

const BottomStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: black;
  background-color: white;
  font-size: 1rem;
  padding: 0.5em;
  text-align: center;
  border: 1px solid black;
`;

const Bottom: React.FunctionComponent<{}> = () => {
  return (
    <BottomStyled>
      Lambda 9, 2019<p>Terms of Service Privacy Policy</p>
    </BottomStyled>
  );
};

export default Bottom;
