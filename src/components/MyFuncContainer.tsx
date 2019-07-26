import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../App';
import { RouteComponentProps } from 'react-router-dom';
import LogContainer from './LogContainer';
import styled from 'styled-components';
import { Statistic } from 'antd';
import { GetGraphData, SubscribeToNewLogs } from '../graphql/graphql';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import InvocationGraph from './MyFuncContainer/InvocationGraph';
import { filter } from 'minimatch';

type TParams = { func: string };

function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
  const [func, setFunction] = useState({});
  const filtered = useContext(MyContext).state.functions.filter(ele => {
    return ele.name === match.params.func;
  })[0];

  console.log('filtereID', filtered.id);

  useEffect(() => {
    async function getData() {
      try {
        const graphData = await API.graphql(
          graphqlOperation(GetGraphData, { id: filtered.id })
        ).then(response => {
          console.log(' i am in response');
          console.log('response:', response);
          console.log(
            'response invocationData:',
            response.data.getFunction.invocationData
          );
          setFunction(response.data.getFunction.invocationData);

          try {
            console.log('FILTERED_ID', filtered.id);
            API.graphql(
              graphqlOperation(SubscribeToNewLogs, { id: filtered.id })
            ).subscribe({
              next: response => {
                console.log(response);
              }
            });
          } catch (error) {
            console.log('error subscribing', error);
          }
        });
      } catch (e) {
        console.log('errrroorr:', e);
      }
    }
    getData();
  }, []);

  return (
    <StyledContainer>
      <Row>
        <p>
          <span className="function-name">{filtered.name}</span> from project{' '}
          <strong>{filtered.projectName}</strong>
        </p>
      </Row>

      <div style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }} />
      {/* <InvocationContainer>
        <Invocation>
          <Statistic
            title='Total Invocations'
            value={filtered.numInvocations}
          />
          <Statistic title='Total Errors' value={filtered.numErrors} />
        </Invocation>
        <Invocation>
          Invocation Over Time
          <InvocationGraph graphData={func} />
        </Invocation>
        <Invocation>One More Graph</Invocation>
        <Invocation>Just Because</Invocation>
      </InvocationContainer> */}
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
  .function-name {
    font-family: 'Roboto Mono', 'Courier', 'Helvetica';
    background: #01172c;
    padding: 0.25rem;
    border-radius: 7px;
    color: salmon;
  }
`;
const InvocationContainer = styled.div`
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
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  padding: 10px;
`;

export default MyFuncContainer;
