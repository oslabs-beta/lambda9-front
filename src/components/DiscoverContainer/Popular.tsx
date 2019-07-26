import React, { useContext } from 'react';
import { MyContext } from '../../App';
import styled from 'styled-components';
import { Badge } from 'antd';

const Popular: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  return (
    <PopularStyled>
      <h2>Most Popular Functions</h2>
      {context
        .map((ele: any) => ele)
        .sort((a, b) => {
          return Number(b.numInvocations) - Number(a.numInvocations);
        })
        .slice(0, 5)
        .map((func: any) => (
          <NameStyled>
            <div>{func.name}</div>
            <div>
              <Badge
                count={func.numInvocations}
                showZero
                overflowCount={999}
                style={{ backgroundColor: 'black' }}
              />{' '}
              Invocations
            </div>
          </NameStyled>
        ))}
    </PopularStyled>
  );
};

const PopularStyled = styled.div`
  height: 100%;
  margin-right: 1em;
  flex: 1;
  padding: 0.5em;
  overflow: scroll;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const NameStyled = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export default Popular;
