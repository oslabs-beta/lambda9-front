import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../App';
import { RouteComponentProps } from 'react-router-dom';
import LogContainer from './LogContainer';
import styled from 'styled-components';
import { Statistic } from 'antd';
import { GetGraphData } from '../graphql/graphql'
import { API, graphqlOperation, Auth } from 'aws-amplify';
import InvocationGraph from './MyFuncContainer/InvocationGraph'

type TParams = { func: string };

function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
  const [func, setFunction] = useState({})
  const filtered = useContext(MyContext).state.functions.filter(ele => {
    return ele.name === match.params.func;
  })[0];

  useEffect(() => {
    async function getData() {
      try {
        const graphData = await API.graphql(
          graphqlOperation(GetGraphData, { id: filtered.id })
        ).then(response => {
          console.log(' i am in response')
          console.log('response:', response);
          console.log('response invocationData:', response.data.getFunction.invocationData);
          setFunction(response.data.getFunction.invocationData)
        });
      }
      catch (e) {
        console.log("errrroorr:", e)
      }
    }
    getData()
  }, [])

  return (
    <StyledContainer>
      <Row>
        {filtered.name} From Project: {filtered.projectName}
      </Row>

      <div style={{ fontSize: '16px', color: 'black', fontWeight: 'bold' }}>
        Overview
      </div>
      <InvocationContainer>
        <Invocation>
          <Statistic
            title="Total Invocations"
            value={filtered.numInvocations}
          />
          <Statistic title="Total Errors" value={filtered.numErrors} />
        </Invocation>
        <Invocation>
          Invocation Over Time
          <InvocationGraph graphData={func} />
        </Invocation>
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
  font-size: 20px;
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
