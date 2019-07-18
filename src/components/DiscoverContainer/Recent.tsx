import React from 'react';
import { MyContext } from '../../App';
import { Func } from '../../@types/types';

const Recent: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>Most Recent</h1>
          {context.state.data
            .sort((a, b) => {
              return (
                new Date(b.lastModified).getTime() -
                new Date(a.lastModified).getTime()
              );
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
                <div>{JSON.stringify(func.lastModified)}</div>
              </div>
            ))}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default Recent;
