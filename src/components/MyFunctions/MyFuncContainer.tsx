import React from 'react';
// import Func from '../../@types/types';
import { MyContext } from '../../App';
import console = require('console');

import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from 'react-router-dom';
import styled from 'styled-components';

type TParams = { func: string };

// const MyFuncContainer: React.FunctionComponent<{}> = () => {
//   return (
//     <MyContext.Consumer>
//       {context => <div>{JSON.stringify(context.state)}</div>}
//     </MyContext.Consumer>
//   );
// };

const Info = styled.div`
  display: flex;
`;

function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <div>
            <Info>
              <div>Name:</div>
              <div>
                {JSON.stringify(
                  context.state.functions.filter(ele => {
                    return ele.functionName === match.params.func;
                  })[0].functionName
                )}
              </div>
            </Info>
          </div>
          <Info>
            <div>Inovcation:</div>
            <div>
              {JSON.stringify(
                context.state.functions.filter(ele => {
                  return ele.functionName === match.params.func;
                })[0].invocation
              )}
            </div>
          </Info>
          <Info>
            <div>Error:</div>
            <div>
              {JSON.stringify(
                context.state.functions.filter(ele => {
                  return ele.functionName === match.params.func;
                })[0].error
              )}
            </div>
          </Info>
        </div>
      )
      // <h2>This is a page for product with ID: {match.params.func}</h2>
      }
    </MyContext.Consumer>
  );
}

export default MyFuncContainer;
