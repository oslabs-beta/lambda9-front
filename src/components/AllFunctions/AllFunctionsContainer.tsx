import React, { useContext } from 'react';
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Table, Button } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { User } from '../../@types/types';
import NavSearch from '../NavSearch';

const columns: ColumnProps<User>[] = [
  {
    key: '1',
    title: 'Index',
    dataIndex: 'index',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => {
      if (a.index < b.index) {
        return -1;
      }
      if (a.index > b.index) {
        return 1;
      }
      return 0;
    },
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: '2',
    title: 'Name',
    dataIndex: 'name',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // sorter: (a, b) => {
    //   if (a.name.toLowerCase() < b.name.toLowerCase()) {
    //     return -1;
    //   }
    //   if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //     return 1;
    //   }
    //   return 0;
    // },
    // sortDirections: ['descend', 'ascend'],
  },
  {
    key: '3',
    title: '',
    dataIndex: 'detail',
  },
  {
    key: '4',
    title: 'Invocations',
    dataIndex: 'numInvocations', // This column should be consistent with other variable;
    sorter: (a, b) => a.numInvocations - b.numInvocations,
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: '5',
    title: 'Errors',
    dataIndex: 'numErrors', // This column should be consistent with other variable;
    sorter: (a, b) => a.numErrors - b.numErrors,
    sortDirections: ['descend', 'ascend'],
  },
  {
    key: '6',
    title: 'Project',
    dataIndex: 'projectName',
    sorter: (a, b) => {
      if (a.projectName.toLowerCase() < b.projectName.toLowerCase()) {
        return -1;
      }
      if (a.projectName.toLowerCase() > b.projectName.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    sortDirections: ['ascend', 'descend'],
  },
  {
    key: '7',
    title: 'Last Modified',
    dataIndex: 'lastModified',
    sorter: (a, b) => {
      if (a.lastModified < b.lastModified) {
        return -1;
      }
      if (a.lastModified > b.lastModified) {
        return 1;
      }
      return 0;
    },
    sortDirections: ['descend', 'ascend'],
  },
];

const AllFunctionsContainer: React.FunctionComponent<{}> = () => {
  let data: User[] = [];
  let stat;
  let index = 1;
  const context = useContext(MyContext).state.functions;
  return (
    <AllFunctionsContainerStyled>
      {context.map(
        func => (
          (stat = new Object()),
          (stat.index = index++),
          (stat.name = <Link to={`/functions/${func.name}`}>{func.name}</Link>),
          (stat.numInvocations = func.numInvocations),
          (stat.numErrors = func.numErrors),
          (stat.projectName = func.projectName),
          (stat.lastModified = format(
            new Date(func.lastModified),
            'MM/DD/YYYY hh:mm aa'
          )),
          data.push(stat),
          console.log(data)
        )
      )}
      {/* <NavSearch/> */}
      <Table columns={columns} dataSource={data} />
    </AllFunctionsContainerStyled>
  );
};

const AllFunctionsContainerStyled = styled.div`
  padding: 1em;
  height: 100vh;
  overflow: scroll;
`;

export default AllFunctionsContainer;
