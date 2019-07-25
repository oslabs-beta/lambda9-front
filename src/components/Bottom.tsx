import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/index';

const Bottom: React.FunctionComponent<{}> = () => {
  return (
    <BottomStyled>
      <div>
        <p>風</p>
      </div>
    </BottomStyled>
  );
};

const BottomStyled = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  color: white;
  background-color: ${colors.secondary};
  text-align: center;
  padding: 0.5rem;
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
  }
`;

export default Bottom;
