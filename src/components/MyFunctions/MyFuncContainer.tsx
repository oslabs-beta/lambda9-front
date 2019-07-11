import React from 'react';
// import Func from '../../@types/types';
import { MyContext } from '../../App';
import console = require('console');

const MyFuncContainer: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => <div>{context.state.functions.functionName}</div>}
    </MyContext.Consumer>
  );
};

export default MyFuncContainer;
