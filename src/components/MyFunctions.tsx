import React, { useContext } from "react";
import { MyContext } from "../App";
import { Func } from "../@types/types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";
import { Badge, Icon } from "antd";

const MyFunction: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state;
  const mapped = useContext(MyContext)
    .state.functions.sort((a, b) => {
      return (
        new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
      );
    })
    .map((func: Func) => (
      <MyFunctionStyled>
        <Link to={`/functions/${func.name}`}>
          <img
            style={{
              width: "2em",
              height: "2em",
              borderRadius: "20px",
              marginRight: "0.5em"
            }}
            src={context.avatar}
          />
          {func.name}
        </Link>
        <div
          style={{
            marginLeft: "1em"
          }}>
          <Badge style={{ color: "dodgerblue", marginRight:"1em" }}
            count={<Icon type='clock-circle' />}
          />
          {format(new Date(func.lastModified), "MM/DD/YYYY hh:mm aa")}
        </div>
      </MyFunctionStyled>
    ));

  return <div>{mapped}</div>;
};

const MyFunctionStyled = styled.div`
  padding: 10px;
  overflow: scroll;
`;

export default MyFunction;
