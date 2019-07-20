import React, { useContext } from "react";
import { MyContext } from "../App";
import { Func } from "../@types/types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "date-fns";
import { Icon } from "antd";
const MyFunction: React.FunctionComponent<{}> = () => {
  const mapped = useContext(MyContext).state.functions.map((func: Func) => (
    <div style={{ padding: "20px" }}>
      <Link to={`/functions/${func.name}`}>{func.name}</Link>
      <div>
        ⏱{" "}{format(new Date(func.lastModified), "MM/DD/YYYY hh:mm aa")}
      </div>
    </div>
  ));

  return <div>{mapped}</div>;
};

export default MyFunction;
