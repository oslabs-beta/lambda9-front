import React, { useContext } from "react";
import { MyContext } from "../../App";
import styled from "styled-components";

import { Line } from 'react-chartjs-2';

const InvocationGraph: React.FunctionComponent<any> = props => {

  let invocations = props.graphData.invocations
  let timestamps = props.graphData.timestamps
  if (typeof invocations === 'string' && timestamps === 'string') {
    const invocationn = JSON.parse(invocations)
    const timestampp = JSON.parse(timestamps)
    //   }
    //   console.log('invoke', invocations)
    //   console.log('time', timestamps)

    //   const mani = []
    //   for (let ele of timestamps) {
    //     mani.push(new Date(ele))
    //   }

    //   console.log('mani', mani)
    var options = {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ''
      }
    };
    var mockdata = {
      labels: timestampp,
      datasets: [
        {
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
          data: invocationn
        }
      ]
    };
    console.log('time', timestampp)
  }

  return (
    <div>
      <Line data={mockdata} options={options} />
    </div>
  );
};


export default InvocationGraph;
