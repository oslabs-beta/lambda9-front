import React from 'react';
import styled from 'styled-components';
import NavSearch from './NavSearch';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOutButton';
import { MyContext } from '../App';

const NavContainerStyled = styled.nav`
  font-size: 2rem;
  padding: 1em;
  color: black;
  background: white;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
`;

const NavContainer: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <NavContainerStyled>
          <div className="logo">🐑 Lambda 9</div>
          <NavSearch />
          <Link to="/">
            <div>Dashboard</div>
          </Link>
          <Link to="/functions">
            <div>Functions</div>
          </Link>
          <img style={{ width: '50px' }} src={context.state.user.avatar} />
          <div>{context.state.user.username}</div>
          <SignOutButton />
        </NavContainerStyled>
      )}
    </MyContext.Consumer>
  );
};

export default NavContainer;
