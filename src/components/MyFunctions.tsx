import React, { useContext } from "react";
import { MyContext } from "../App";
import { Func } from "../@types/types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";

const MyFunction: React.FunctionComponent<{}> = () => {
  const mapped = useContext(MyContext)
    .state.functions.sort((a, b) => {
      return (
        new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
      );
    })
    .map((func: Func) => (
      <MyFunctionStyled>
        <Link to={`/functions/${func.name}`}>{func.name}</Link>
        <div>
          ⏱ {format(new Date(func.lastModified), "MM/DD/YYYY hh:mm aa")}
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
