import React, { useContext } from "react";
import { MyContext } from "../../App";
import styled from "styled-components";
import { Badge } from "antd";

const Popular: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  return (
    <PopularStyled>
      <h2>Most Popular Functions</h2>
      {context
        .map((ele: any) => ele)
        .sort((a, b) => {
          return Number(b.numInvocations) - Number(a.numInvocations);
        })
        .slice(0, 5)
        .map((func: any) => (
          <NameStyled>
            <div>⚛︎ {func.name}</div>
            <div>
              ⚡️Invoked:{" "}
              <Badge
                count={func.numInvocations}
                showZero
                overflowCount={999}
                style={{ backgroundColor: "dodgerblue" }}
              />
            </div>
          </NameStyled>
        ))}
    </PopularStyled>
  );
};

const PopularStyled = styled.div`
  border: 1px dodgerblue solid;
  height: 100%;
  padding: 10px;
  margin-right: 1em;
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

export default Popular;
