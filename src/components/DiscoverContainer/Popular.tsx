import React, { useContext } from "react";
import { MyContext } from "../../App";
import styled from "styled-components";

const Popular: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  return (
    <PopularStyled>
      <h2>Most Popular</h2>
      {context
        .map((ele: any) => ele)
        .sort((a, b) => {
          return Number(b.numInvocations) - Number(a.numInvocations);
        })
        .slice(0, 5)
        .map((func: any) => (
          <div>
            <div>Function: {func.name}</div>
            <div>Invocations: {func.numInvocations}</div>
          </div>
        ))}
    </PopularStyled>
  );
};

const PopularStyled = styled.div`
  border: 1px dodgerblue solid;
  padding: 10px;
  margin-right: 1em;
  flex: 1;
  border-radius: 10px;
  background-color: lightgray;
`;

export default Popular;
