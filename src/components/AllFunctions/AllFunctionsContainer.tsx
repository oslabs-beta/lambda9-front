import React from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

import { Table, Button } from "antd";
import { ColumnProps } from "antd/lib/table";

interface User {
  name: string;
  detail: string;
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
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "2",
    title: "",
    dataIndex: "detail"
  },
  {
    key: "3",
    title: "Invocations",
    dataIndex: "invocations",
    sorter: (a, b) => a.invocations - b.invocations,
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "4",
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
    sortDirections: ["descend", "ascend"]
  },
  {
    key: "5",
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
    sortDirections: ["descend", "ascend"]
  }
];

const AllFunctionsContainer: React.FunctionComponent<{}> = () => {
  let data: User[] = [];
  let stat;

  return (
    <MyContext.Consumer>
      {context => (
        <div
          style={{
            border: "10px solid green",
            padding: "1em",
            height: "100vh"
          }}>
          {context.state.functions.map(
            func => (
              (stat = new Object()),
              (stat.name = func.functionName),
              (stat.detail = (
                <Link to={`/functions/${func.functionName}`}>
                  <Button type="primary">Detail</Button>
                </Link>
              )),
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
