import React from "react";
// import Func from '../../@types/types';
import { MyContext } from "../App";
import console = require("console");
// import { Err } from './Err';

import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";
import styled from "styled-components";

type TParams = { func: string };

const Info = styled.div`
  display: flex;
  border: 1px solid black;
`;

function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
  return (
    <MyContext.Consumer>
      {context => (
        <div style={{height: "100vh"}}>
          <Info>
            <div>Name:</div>
            <div>
              {
                context.state.functions.filter(ele => {
                  return ele.functionName === match.params.func;
                })[0].functionName
              }
            </div>
          </Info>
          <Info>
            <div>Inovcation:</div>
            <div>
              {
                context.state.functions.filter(ele => {
                  return ele.functionName === match.params.func;
                })[0].invocation
              }
            </div>
          </Info>
          <Info>
            <div>Error:</div>
            <div>
              {
                context.state.functions.filter(ele => {
                  return ele.functionName === match.params.func;
                })[0].error
              }
            </div>
          </Info>
        </div>
      )
      // <h2>This is a page for product with ID: {match.params.func}</h2>
      }
    </MyContext.Consumer>
  );
}

// function MyFuncContainer({ match }: RouteComponentProps<TParams>) {
//   let myfunction;
//   <MyContext.Consumer>
//     {context => ({
//       myfunction = context.state.functions.filter(ele => {
//         return ele.functionName === match.params.func;
//       })[0]
//     })}
//   </MyContext.Consumer>;
//   return <Err filtered={myfunction} />;
// }

export default MyFuncContainer;
