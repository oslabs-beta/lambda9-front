import React from "react";
import { MyContext } from "../../App";
import styled from "styled-components";

const Popular: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <PopularStyled>
          <h1 style={{ border: "1px solid black", display: "table-cell" }}>Most Popular</h1>
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
                    .split("-")
                    .slice(0, -1)
                    .join("-")}
                </div>
                <div>{func.invocations}</div>
              </div>
            ))}
        </PopularStyled>
      )}
    </MyContext.Consumer>
  );
};

const PopularStyled = styled.div`
  border: 1px dodgerblue solid;
  padding: 10px;
  margin-right: 1em;
  flex: 1;
  border-radius: 10px;
  background-color: lightgray;
`;

export default Popular;
