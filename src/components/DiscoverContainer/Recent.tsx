import React, { useContext } from "react";
import { MyContext } from "../../App";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";

const Recent: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  return (
    <RecentStyled>
      <h2>Most Recent Function</h2>
      {context
        .sort((a, b) => {
          return (
            new Date(b.lastModified).getTime() -
            new Date(a.lastModified).getTime()
          );
        })
        .slice(0, 5)
        .map((func: any) => (
          <NameStyled>
            <div>⚛︎ {func.name}</div>
            <div>⏱ {distanceInWordsToNow(new Date(func.lastModified))} ago</div>
          </NameStyled>
        ))}
    </RecentStyled>
  );
};

const RecentStyled = styled.div`
  border: 1px dodgerblue solid;
  height: 100%;
  padding: 10px;
  flex: 1;
  border-radius: 10px;
  background-color: lightgray;
  overflow: scroll;
`;

const NameStyled = styled.div`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
`;

export default Recent;
