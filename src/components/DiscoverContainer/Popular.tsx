import React from 'react';
import { MyContext } from '../../App';
import { Func } from '../../@types/types';

const Popular: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>Most Popular</h1>
          {context.state.functions
            .sort((a, b) => {
              return b.invocation - a.invocation;
            })
            .map((func: Func) => (
              <div>
                <div>{func.functionName}</div>
                <div>{func.invocation}</div>
              </div>
            ))}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Popular;
