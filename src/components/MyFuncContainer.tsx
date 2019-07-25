import React, { useContext } from "react";
import { MyContext } from "../App";
import { RouteComponentProps } from "react-router-dom";
import LogContainer from "./LogContainer";
import styled from "styled-components";
import { Statistic, Icon } from "antd";

type TParams = { func: string };

function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
  const filtered = useContext(MyContext).state.functions.filter(ele => {
    return ele.name === match.params.func;
  })[0];

  return (
    <StyledContainer>
      <div style={{ fontSize: "16px", color: "black", fontWeight: "bold" }}>
        Overview -  🗂 {filtered.projectName} - {filtered.name}
      </div>
      <InvocationContainer>
        <Invocation>
          <Statistic
            title='Total Invocations'
            value={filtered.numInvocations}
          />
          <Statistic title='Total Errors' value={filtered.numErrors} />
        </Invocation>
        <Invocation>Invocation Over Time</Invocation>
        <Invocation>One More Graph</Invocation>
        <Invocation>Just Because</Invocation>
      </InvocationContainer>
      <LogContainer logs={filtered} />
    </StyledContainer>
  );
}

const Info = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
`;
const InvocationContainer = styled.div`
  height:
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 20px;
  background: #f5f5f5;
`;
const Invocation = styled.div`
  margin: 5px;
`;
const StyledContainer = styled.div`
  height: 100vh;
  padding: 10px;
`;

export default MyFuncContainer;
