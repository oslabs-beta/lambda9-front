import React, { useContext } from 'react';
import { MyContext } from '../App';
import { Func } from '../@types/types';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Line } from 'react-chartjs-2';
import { colors } from '../utils/index';

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
    labels: [
      '2019-07-24',
      '2019-07-16',
      '2019-07-15',
      '2019-07-11',
      '2019-07-10',
    ],
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
        pointRadius: 3,
        pointHitRadius: 10,
        data: [23, 13, 7, 10, 5],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '',
    },
  };

  return (
    <OverviewStyled>
      <OverviewDataStyled>
        <HeaderStyled>Overview</HeaderStyled>
        <div>{/* Total Functions: {context.length} */}</div>
        {/* <div>Total Projects: {project.length}</div> */}
        {/* <div>{update}</div> */}
        <BoxStyled>
          <div>
            <h3>Total Invocations</h3>
            <InvocationStyle>
              {context.reduce((total: number, func: Func) => {
                total += func.numInvocations;
                return total;
              }, 0)}
            </InvocationStyle>
          </div>
          <div>
            <h3>Total Invocations</h3>
            <ErrorStyle>
              {context.reduce((total: number, func: Func) => {
                total += func.numErrors;
                return total;
              }, 0)}
            </ErrorStyle>
          </div>
        </BoxStyled>
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
  margin-right: 2rem;
`;

const GraphStyled = styled.div`
  height: auto;
  width: 100%;
  max-width: 600px;
  align-self: center;
  justify-self: center;
`;

const InvocationStyle = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
const ErrorStyle = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: ${colors.grey};
  }
`;
const HeaderStyled = styled.h1`
  font-weight: 700;
  margin-bottom: 2rem;
`;

export default Overview;
