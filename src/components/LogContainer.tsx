import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const LogContainer: React.FunctionComponent<any> = props => {
  const logsList = props.logs.logs.items.map((log: any) => {
    return (
      <div>
        {JSON.stringify(log).slice(1, -1)}
        <div>
          <br />
        </div>
      </div>
    );
  });
  return (
    <Tabs defaultActiveKey='1'>
      <TabPane tab='Function Definition' key='1'>
        <Stuff> {JSON.stringify(props.logs.definition)}</Stuff>
      </TabPane>
      <TabPane tab='Logs' key='2'>
        <Stuff>{logsList}</Stuff>
      </TabPane>
    </Tabs>
  );
};

const Stuff = styled.div`
  height: 30vh;
  background: #01172c;
  overflow: scroll;
  border-radius: 7px;
  padding: 2rem;
  color: white;
  font-family: 'Roboto Mono', 'Courier', sans-serif;
`;

export default LogContainer;
