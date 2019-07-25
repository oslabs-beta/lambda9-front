import React from "react";
import styled from "styled-components";
import { colors } from "../utils/index";

const Bottom: React.FunctionComponent<{}> = () => {
  return (
    <BottomStyled>
      <div>
        AIRFN, 2019<div>Terms of Service Privacy Policy</div>
      </div>
    </BottomStyled>
  );
};

const BottomStyled = styled.div`
  width: 100%;
  flex: 0.1;
  color: white;
  background-color: ${colors.secondary};
  font-size: 1rem;
  text-align: center;
`;

export default Bottom;
