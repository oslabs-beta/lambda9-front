import React, { useContext } from 'react';
import { MyContext } from '../App';
import { RouteComponentProps } from 'react-router-dom';
import LogContainer from './LogContainer';
import styled from 'styled-components';
import { Statistic } from 'antd';

import { Line } from 'react-chartjs-2';

type TParams = { func: string };

function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
  const filtered = useContext(MyContext).state.functions.filter(ele => {
    return ele.name === match.params.func;
  })[0];

  const options = {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: ''
    }
  };
  const mockdata = {
    labels: ['2019-07-24', '2019-07-16', '2019-07-15'],
    datasets: [
      {
        // label: 'dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [23, 13, 7]
      }
    ]
  };

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
          <Line data={mockdata} options={options} />
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
