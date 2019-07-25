import React, { useContext } from 'react';
import { MyContext } from '../App';
import { Func } from '../@types/types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Badge, Icon } from 'antd';

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
        <Link
          to={`/functions/${func.name}`}
          style={{ fontSize: '1.2rem', color: 'black' }}
        >
          {func.name}
        </Link>
        <div
          style={{
            marginLeft: '1em',
          }}
        >
          <Badge
            style={{ color: 'black', marginRight: '1em' }}
            count={<Icon type='clock-circle' />}
          />
          {format(new Date(func.lastModified), 'MM/DD/YYYY hh:mm A')}
        </div>
      </MyFunctionStyled>
    ));

  return <MyFunctionContainerStyled>{mapped}</MyFunctionContainerStyled>;
};

const MyFunctionContainerStyled = styled.div`
  margin-top: 0.5em;
  overflow: scroll;
  height: 100vh;
`;

const MyFunctionStyled = styled.div`
  margin: 10px;
`;

export default MyFunction;
