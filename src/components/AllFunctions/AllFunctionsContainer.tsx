import React from "react";
import { MyContext } from "../../App";

import { Table } from "antd";
import { ColumnProps } from "antd/lib/table";

interface User {
  name: string;
  invocations: number;
  project: string;
  lastModified: string;
}

const columns: ColumnProps<User>[] = [
  {
    key: "1",
    title: "Name",
    dataIndex: "name",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    },
    sortDirections: ["descend"]
  },
  {
    title: "Invocations",
    dataIndex: "invocations",
    sorter: (a, b) => a.invocations - b.invocations,
    sortDirections: ["descend"]
  },
  {
    title: "Project",
    dataIndex: "project",
    sorter: (a, b) => {
      if (a.project < b.project) {
        return -1;
      }
      if (a.project > b.project) {
        return 1;
      }
      return 0;
    },
    sortDirections: ["descend"]
  },
  {
    title: "Last Modified",
    dataIndex: "lastModified",
    sorter: (a, b) => {
      if (a.lastModified < b.lastModified) {
        return -1;
      }
      if (a.lastModified > b.lastModified) {
        return 1;
      }
      return 0;
    },
    sortDirections: ["descend"]
  }
];

const AllFunctionsContainer: React.FunctionComponent<{}> = () => {
  let data: User[] = [];
  let stat;

  return (
    <MyContext.Consumer>
      {context => (
        <div style={{ padding: "1em" }}>
          {context.state.functions.map(
            func => (
              (stat = new Object()),
              (stat.name = func.functionName),
              (stat.invocations = func.invocation),
              (stat.project = func.project),
              (stat.lastModified = JSON.stringify(func.lastModified)),
              data.push(stat),
              console.log(data)
            )
          )}
          <Table columns={columns} dataSource={data} />
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default AllFunctionsContainer;
