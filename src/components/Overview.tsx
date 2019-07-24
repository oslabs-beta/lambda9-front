import React, { useContext } from "react";
import { MyContext } from "../App";
import { Func } from "../@types/types";
import styled from "styled-components";
import { format } from "date-fns";
import { Icon } from "antd";

const Overview: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  const update = context
    .sort((a, b) => {
      return (
        new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
      );
    })
    .slice(0, 1)
    .map((func: any) => (
      <div>
        <Icon type='hourglass' style={{color:"dodgerblue"}}/> Last Updated:{" "}
        {format(new Date(func.lastModified), "MM/DD/YYYY hh:mm aa")}
      </div>
    ));

  const project = context.reduce((uniq, func) => {
    if (uniq.indexOf(func.projectName) === -1) uniq.push(func.projectName);
    return uniq;
  }, []);

  return (
    <OverviewStyled>
      <h1>Overview</h1>
      <div>
        <Icon type='cloud' style={{ color: "dodgerblue" }} /> Total Functions:
        {context.length}
      </div>
      <div>
        <Icon type='folder-open' style={{ color: "dodgerblue" }} /> Total
        Projects: {project.length}
      </div>
      <div>{update}</div>
      <div>
        <Icon type='thunderbolt' style={{ color: "dodgerblue" }} /> Total
        Invocations:
        {context.reduce((total: number, func: Func) => {
          total += func.numInvocations;
          return total;
        }, 0)}
      </div>
      <div>
        <Icon type='bug' style={{ color: "dodgerblue" }} /> Total Errors:
        {context.reduce((total: number, func: Func) => {
          total += func.numErrors;
          return total;
        }, 0)}
      </div>
    </OverviewStyled>
  );
};

const OverviewStyled = styled.div`
  flex: 1;
`;

export default Overview;
