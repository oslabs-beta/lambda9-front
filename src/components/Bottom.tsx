import React from "react";
import styled from "styled-components";

const Bottom: React.FunctionComponent<{}> = () => {
  return (
    <BottomStyled>
        <div>Lambda 9, 2019<div>Terms of Service Privacy Policy</div></div>
    </BottomStyled>
  );
};

const BottomStyled = styled.div`
  width: 100%;
  flex: 0.1;
  color: black;
  font-size: 1rem;
  text-align: center;
  border: 1px solid black;
`;

export default Bottom;
