import React from "react";
import styled from "styled-components";

const Bottom: React.FunctionComponent<{}> = () => {
  return (
    <BottomStyled>
        <div  style={{color:"white"}}>AIRFN, 2019<div>Terms of Service Privacy Policy</div></div>
    </BottomStyled>
  );
};

const BottomStyled = styled.div`
  width: 100%;
  flex: 0.1;
  color: black;
  background-color: dodgerblue;
  font-size: 1rem;
  text-align: center;
  border: 3px solid #f7b731;
`;

export default Bottom;
