import React, { useContext } from "react";
import { MyContext } from "../App";
import { Func } from "../@types/types";
import styled from "styled-components";
import { format } from "date-fns";

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
        Last Updated:{" "}
        {format(new Date(func.lastModified), "MM/DD/YYYY hh:mm A")}
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
        Total Functions:
        {context.length}
      </div>
      <div>Total Projects: {project.length}</div>
      <div>{update}</div>
      <div>
        Total Invocations:
        {context.reduce((total: number, func: Func) => {
          total += func.numInvocations;
          return total;
        }, 0)}
      </div>
      <div>
        Total Errors:
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
