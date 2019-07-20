import React, { useContext } from "react";
import { MyContext } from "../../App";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

const Recent: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  return (
    <RecentStyled>
      <h2>Most Recent</h2>
      {context
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
              Last modified: {distanceInWordsToNow(new Date(func.lastModified))}{" "}
              ago
            </div>
          </div>
        ))}
    </RecentStyled>
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
