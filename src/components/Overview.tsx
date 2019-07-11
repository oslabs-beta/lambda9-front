import React from 'react';
import { MyContext } from '../App';
import { Func } from '../@types/types';

const Overview: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>Overview</h1>
          <div>
            Total Invocations:
            {context.state.functions.reduce((total: number, func: Func) => {
              total += func.invocation;
              return total;
            }, 0)}
          </div>
          <div>
            Total Errors:
            {context.state.functions.reduce((total: number, func: Func) => {
              total += func.error;
              return total;
            }, 0)}
          </div>
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Overview;
