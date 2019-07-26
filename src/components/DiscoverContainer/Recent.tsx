import React, { useContext } from 'react';
import { MyContext } from '../../App';
import styled from 'styled-components';
import { distanceInWordsToNow } from 'date-fns';
import { Badge, Icon } from 'antd';

const Recent: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state.functions;
  return (
    <RecentStyled>
      <h2>Most Recent Function</h2>
      {context
        .sort((a, b) => {
          return (
            new Date(b.lastModified).getTime() -
            new Date(a.lastModified).getTime()
          );
        })
        .slice(0, 5)
        .map((func: any) => (
          <NameStyled>
            <div>{func.name}</div>
            <div>
              <Badge
                count={
                  <Icon
                    type='clock-circle'
                    style={{ color: 'black', marginRight: '1em' }}
                  />
                }
              />{' '}
              {distanceInWordsToNow(new Date(func.lastModified))} ago
            </div>
          </NameStyled>
        ))}
    </RecentStyled>
  );
};

const RecentStyled = styled.div`
  height: 100%;
  padding: 0.5em;
  flex: 1;
  border-radius: 8px;
  overflow: scroll;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const NameStyled = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export default Recent;
