import React, { useContext } from "react";
import { MyContext } from "../../App";
import styled from "styled-components";
import { distanceInWordsToNow } from "date-fns";
import { Badge, Icon } from "antd";

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
            <div>
              <Badge
                count={
                  <Icon type='clock-circle' style={{ color: "dodgerblue", marginRight:"1em" }} />
                }
              />{" "}
              {distanceInWordsToNow(new Date(func.lastModified))} ago
            </div>
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
  border-radius: 8px;
  background-color: #48dbfb;
  overflow: scroll;
`;

const NameStyled = styled.div`
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
`;

export default Recent;
