import React from 'react';
import { MyContext } from '../../App';
import { Func } from '../../@types/types';

const Trending: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>Trending</h1>
          {context.state.functions.map((func: Func) => (
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

export default Trending;
