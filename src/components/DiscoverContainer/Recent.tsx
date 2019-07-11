import React from 'react';
import { MyContext } from '../../App';
import { Func } from '../../@types/types';

const Recent: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>Most Recent</h1>
          {context.state.functions
            .sort((a: any, b: any) => {
              return b.lastModified.getTime() - a.lastModified.getTime();
            })
            .map((func: Func) => (
              <div>
                <div>{func.functionName}</div>
                <div>{JSON.stringify(func.lastModified)}</div>
              </div>
            ))}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Recent;
