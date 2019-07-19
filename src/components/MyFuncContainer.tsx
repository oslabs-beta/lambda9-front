import React, { useContext } from "react";
import { MyContext } from "../App";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";

type TParams = { func: string };

function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
  const value = useContext(MyContext);
  const filtered = value.state.functions.filter(ele => {
    return ele.name === match.params.func;
  })[0];
  return (
    <div style={{ flex: "1" }}>
      <Info>{filtered.name}</Info>
      <Info>{filtered.numInvocations}</Info>
      <Info>{filtered.numErrors}</Info>
    </div>
  );
}

const Info = styled.div`
  display: flex;
  border: 1px solid black;
`;

export default MyFuncContainer;
