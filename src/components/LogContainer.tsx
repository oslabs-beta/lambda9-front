import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
    <Tabs defaultActiveKey="1">
      <TabPane tab="Function Definition" key="1">
        <StyledSyntax language="javascript" style={docco}>
          {props.logs.definition}
        </StyledSyntax>
      </TabPane>
      <TabPane tab="Logs" key="2">
        <Container>{logsList}</Container>
      </TabPane>
    </Tabs>
  );
};

const Container = styled.div`
  height: 50vh;
  background: #01172c;
  overflow: scroll;
  border-radius: 7px;
  padding: 2rem;
  color: white;
  font-family: 'Roboto Mono', 'Courier', sans-serif;
`;

const StyledSyntax = styled(SyntaxHighlighter)`
  height: 50vh;
  overflow: scroll;
  border-radius: 7px;
  padding: 3rem;
`;

export default LogContainer;
