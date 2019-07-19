import React from "react";
import styled from "styled-components";

const BottomStyled = styled.div`
  width: 100%;
  height: 10vh;
  color: black;
  font-size: 1rem;
  padding: 0.5em;
  text-align: center;
  border: 6px solid black;
`;

const Bottom: React.FunctionComponent<{}> = () => {
  return (
    <BottomStyled>
      <div>
        Lambda 9, 2019<p>Terms of Service Privacy Policy</p>
      </div>
    </BottomStyled>
  );
};

export default Bottom;
