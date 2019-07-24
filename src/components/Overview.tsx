import React, { useContext } from 'react';
import { MyContext } from '../App';
import { Func } from '../@types/types';
import styled from 'styled-components';
import { format } from 'date-fns';

import { Line } from 'react-chartjs-2';

const Overview: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  const update = context
    .sort((a, b) => {
      return (
        new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
      );
    })
    .slice(0, 1)
    .map((func: any) => (
      <div>
        Last Updated:{' '}
        {format(new Date(func.lastModified), 'MM/DD/YYYY hh:mm A')}
      </div>
    ));

  const project = context.reduce((uniq, func) => {
    if (uniq.indexOf(func.projectName) === -1) uniq.push(func.projectName);
    return uniq;
  }, []);

  const mockdata = {
    labels: ['2019-07-24', '2019-07-16', '2019-07-15'],
    datasets: [
      {
        label: 'dataset',
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

  const options = {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: ''
    }
  };

  return (
    <OverviewStyled>
      <OverviewDataStyled>
        <h1>Overview</h1>
        <div>
          Total Functions:
          {context.length}
        </div>
        <div>Total Projects: {project.length}</div>
        <div>{update}</div>
        <div>
          Total Invocations:
          {context.reduce((total: number, func: Func) => {
            total += func.numInvocations;
            return total;
          }, 0)}
        </div>
        <div>
          Total Errors:
          {context.reduce((total: number, func: Func) => {
            total += func.numErrors;
            return total;
          }, 0)}
        </div>
      </OverviewDataStyled>
      <GraphStyled>
        <Line data={mockdata} options={options} />
      </GraphStyled>
    </OverviewStyled>
  );
};

const OverviewStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: align-content;
`;
const OverviewDataStyled = styled.div`
  flex: 1;
`;

const GraphStyled = styled.div``;
export default Overview;
