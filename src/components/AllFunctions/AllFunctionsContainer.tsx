import React from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import styled from "styled-components";
import console = require("console");

const NavStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const AllFunctionsContainer: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <div>All Functions</div>
          <nav>
            <NavStyled>
                <li>Name</li>
                <li>invocations</li>
                <li>Last Modified</li>
                <li>Project</li>
            </NavStyled>
          </nav>
          {context.state.functions.map(func => (
            <NavStyled>
              <div>{func.functionName}</div>
              <div>{func.invocation}</div>
              <div>{JSON.stringify(func.lastModified)}</div>
              <div>{func.project}</div>
            </NavStyled>
          ))}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default AllFunctionsContainer;
