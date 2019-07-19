import React from "react";
import { MyContext } from "../../App";
import styled from "styled-components";
import { distanceInWordsToNow, subDays } from "date-fns";

const Recent: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <RecentStyled>
          <div style={{ border: "1px solid black", display: "table-cell" }}>
            <h1>Most Recent</h1>
          </div>
          {context.state.functions
            .sort((a, b) => {
              return (
                new Date(b.lastModified).getTime() -
                new Date(a.lastModified).getTime()
              );
            })
            .slice(0, 5)
            .map((func: any) => (
              <div>
                <div>Function: {func.name}</div>
                <div>
                  Last modified:{" "}
                  {distanceInWordsToNow(new Date(func.lastModified))
                  // new Date()
                  }{" "}
                  ago
                </div>
              </div>
            ))}
        </RecentStyled>
      )}
    </MyContext.Consumer>
  );
};

const RecentStyled = styled.div`
  border: 1px dodgerblue solid;
  padding: 10px;
  flex: 1;
  border-radius: 10px;
  background-color: lightgray;
`;

export default Recent;
