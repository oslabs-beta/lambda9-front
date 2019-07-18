import React from 'react';
import { MyContext } from '../../App';
import { Func } from '../../@types/types';

const Popular: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>Most Popular</h1>
          {context.state.data
            .map((ele: any) => ele)
            .sort((a, b) => {
              return Number(b.invocations) - Number(a.invocations);
            })
            .slice(0, 5)
            .map((func: any) => (
              <div>
                <div>
                  {func.functionName
                    .split('-')
                    .slice(0, -1)
                    .join('-')}
                </div>
                <div>{func.invocations}</div>
              </div>
            ))}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Popular;
