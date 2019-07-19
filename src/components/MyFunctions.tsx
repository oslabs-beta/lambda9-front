import React from 'react';
import { MyContext } from '../App';
import { Func } from '../@types/types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setMinutes } from 'date-fns';



const MyFunction: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <div>
          <h1>My Functions</h1>
          {context.state.functions.map((func: Func) => (
            <div style={{ padding: '20px' }}>
              <Link to={`/functions/${func.name}`}>
                {func.name}
              </Link>
              <div>{JSON.stringify(func.lastModified)}</div>
            </div>
          ))}
        </div>
      )}
    </MyContext.Consumer>
  );
};

export default MyFunction;
